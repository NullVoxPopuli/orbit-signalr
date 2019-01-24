import JSONAPISource, { JSONAPISourceSettings } from '@orbit/jsonapi';
import SocketClient from './socket/client';

interface ISettings extends JSONAPISourceSettings {
  socketClient: SocketClient;
}

export default class extends JSONAPISource {
  constructor(settings: ISettings = {}) {
    settings.name = settings.name || 'signalr-jsonapi';

    super(settings);

    // init socket client? or set an already instantiated one?
  }

  public fetch(url: string): Promise<any> {
    // send to socket
    // how do we handle returned data?
    // - I don't think we can, unless we coordinate request ids
    // - somewhat feels like re-inventing tcp/http?
  }
}