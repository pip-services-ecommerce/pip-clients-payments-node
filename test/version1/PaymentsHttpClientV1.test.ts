let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { PaymentsMemoryPersistence } from 'pip-services-payments-node';
import { PaymentsController } from 'pip-services-payments-node';
import { PaymentsHttpServiceV1 } from 'pip-services-payments-node';
import { IPaymentsClientV1 } from '../../src/version1/IPaymentsClientV1';
import { PaymentsHttpClientV1 } from '../../src/version1/PaymentsHttpClientV1';
import { PaymentsClientFixtureV1 } from './PaymentsClientFixtureV1';
import { StripePlatform } from 'pip-services-payments-node';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('PaymentsHttpClientV1', () => {
    let service: PaymentsHttpServiceV1;
    let client: PaymentsHttpClientV1;
    let fixture: PaymentsClientFixtureV1;
    let terminate: boolean = false;

    suiteSetup((done) => {
        var STRIPE_ACCESS_KEY = process.env["STRIPE_ACCESS_KEY"];

        if (!STRIPE_ACCESS_KEY) {
            terminate = true;
            done(null);
            return;
        }

        let logger = new ConsoleLogger();
        let persistence = new PaymentsMemoryPersistence();
        let controller = new PaymentsController();

        service = new PaymentsHttpServiceV1();
        service.configure(httpConfig);

        let stripePlatform = new StripePlatform();
        stripePlatform.configure(ConfigParams.fromTuples(
            'options.auto_confirm', false,
            'credential.access_key', STRIPE_ACCESS_KEY
        ));

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-payments', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-payments', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-payments', 'service', 'http', 'default', '1.0'), service,
            new Descriptor('pip-services-payments', 'platform', 'stripe', '*', '1.0'), stripePlatform
        );

        persistence.setReferences(references);
        controller.setReferences(references);
        service.setReferences(references);

        client = new PaymentsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new PaymentsClientFixtureV1(client);

        stripePlatform.open(null, (err) => {
            service.open(null, (err) => {
                client.open(null, done);
            });
        });
    });

    suiteTeardown((done) => {
        if (terminate) {
            done();
            return;
        }

        client.close(null);
        service.close(null, done);
    });

    test('Make credit payment', (done) => {
        if (terminate) {
            done();
            return;
        }

        fixture.testMakeCreditPayment(done);
    });

});
