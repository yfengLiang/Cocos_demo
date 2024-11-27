import { EventTarget } from "cc";

export class AppNotification extends EventTarget {
  private constructor() {
    super();
  }

  private static instance: AppNotification;
  public static getInstance() {
    if (!this.instance) {
      this.instance = new AppNotification();
    }

    return this.instance;
  }

  public static on(eventName: string, cb: (arg: any) => void, target: any) {
    this.getInstance().on(eventName, cb, target);
  }

  public static off(eventName: string) {
    this.getInstance().off(eventName);
  }

  public static targetOff(target: any) {
    this.getInstance().targetOff(target);
  }

  public static emit(eventName: string) {
    this.getInstance().emit(eventName);
  }
}
