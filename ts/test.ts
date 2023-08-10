
export type HandlerName = 'router' | 'channels' | 'lan' | 'message' | 'webrtc' | 'ws'| 'void' |'this' | 'any';

export interface DefaultWsInMessage<A extends string, H extends HandlerName> {
  handler: H;
  cbBySender?: string;
  action: A;
  cbId?: number;
}

export type HandlerType<A extends string, H extends HandlerName> = (a: DefaultWsInMessage<A, H>) => void|Promise<void>;


type HandlerTypes<K extends string, H extends HandlerName> = {
  [Key in K]?: HandlerType<Key,H>
};


export interface SetSettingsMessage extends DefaultWsInMessage<'setSettings', 'ws'> {
  content: string;
}

export interface SetUserMessage extends DefaultWsInMessage<'setUser', 'lan'> {
  user: string;
}

export default class WsHandler {
  protected readonly handlers: HandlerTypes<keyof WsHandler, 'ws'> = {
    setSettings: <HandlerType<'setSettings', 'ws'>>this.setSettings
  }
  private setSettings(m: SetSettingsMessage) {
  }

}


class A {

  private h: HandlerTypes<keyof A, 'message'> = {
    setSettings: this.setSettings as HandlerType<'setSettings', HandlerName>,
    setUser: this.setUser as HandlerType<'setUser', HandlerName>,
  };

  setSettings(a: SetSettingsMessage) {

  }

  setUser(a: SetUserMessage) {

  }



}
