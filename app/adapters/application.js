//
// Import the default export from active-model-adapter //
import ActiveModelAdapter from 'active-model-adapter';
import config from '../config/environment';
export default ActiveModelAdapter.extend({
  host: config.host,
  namespace: 'api/v4',
  coalesceFindRequests: true
});
