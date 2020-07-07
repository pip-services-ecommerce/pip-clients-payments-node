import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { PaymentsNullClientV1 } from '../version1/PaymentsNullClientV1';
import { PaymentsDirectClientV1 } from '../version1/PaymentsDirectClientV1';
import { PaymentsHttpClientV1 } from '../version1/PaymentsHttpClientV1';

export class PaymentsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-payments', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('pip-services-payments', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-payments', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-payments', 'client', 'http', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(PaymentsClientFactory.NullClientV1Descriptor, PaymentsNullClientV1);
		this.registerAsType(PaymentsClientFactory.DirectClientV1Descriptor, PaymentsDirectClientV1);
		this.registerAsType(PaymentsClientFactory.HttpClientV1Descriptor, PaymentsHttpClientV1);
	}
	
}
