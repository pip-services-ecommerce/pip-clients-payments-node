import { Descriptor, ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { PaymentsMemoryPersistence } from 'pip-services-payments-node';
import { PaymentsController } from 'pip-services-payments-node';
import { PaymentsDirectClientV1 } from '../../src/version1/PaymentsDirectClientV1';
import { PaymentsClientFixtureV1 } from './PaymentsClientFixtureV1';
import { StripePlatform } from 'pip-services-payments-node';

suite('PaymentsDirectClientV1', () => {
    let client: PaymentsDirectClientV1;
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
        let paymentsPersistence = new PaymentsMemoryPersistence();

        let controller = new PaymentsController();

        let stripePlatform = new StripePlatform();
        stripePlatform.configure(ConfigParams.fromTuples(
            'options.auto_confirm', false,
            'credential.access_key', STRIPE_ACCESS_KEY
        ));

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-payments', 'persistence', 'memory', 'default', '1.0'), paymentsPersistence,
            new Descriptor('pip-services-payments', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-payments', 'platform', 'stripe', '*', '1.0'), stripePlatform
        );

        paymentsPersistence.setReferences(references);
        controller.setReferences(references);

        client = new PaymentsDirectClientV1();
        client.setReferences(references);

        fixture = new PaymentsClientFixtureV1(client);

        stripePlatform.open(null, (err) => {
            client.open(null, done);
        });
    });

    suiteTeardown((done) => {
        if (terminate) {
            done();
            return;
        }

        client.close(null, done);
    });

    test('Make credit payment', (done) => {
        if (terminate) {
            done();
            return;
        }

        fixture.testMakeCreditPayment(done);
    });

});
