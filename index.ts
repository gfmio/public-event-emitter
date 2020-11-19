import EventEmitter from "eventemitter3";

export class PublicEventEmitter<
  T extends EventEmitter.ValidEventTypes,
  C = any
> {
  protected eventEmitter: EventEmitter<T, C>;

  constructor(eventEmitter = new EventEmitter<T, C>()) {
    this.eventEmitter = eventEmitter;
  }

  /** Add a listener for a given event. */
  public on<K extends EventEmitter.EventNames<T>>(
    event: K,
    fn: EventEmitter.EventListener<T, K>,
    context?: C
  ): this {
    this.eventEmitter.on(event, fn, context);
    return this;
  }

  /** Add a listener for a given event. */
  public addListener<K extends EventEmitter.EventNames<T>>(
    event: K,
    fn: EventEmitter.EventListener<T, K>,
    context?: C
  ): this {
    this.eventEmitter.addListener(event, fn, context);
    return this;
  }

  /** Add a one-time listener for a given event. */
  public once<K extends EventEmitter.EventNames<T>>(
    event: K,
    fn: EventEmitter.EventListener<T, K>,
    context?: C
  ): this {
    this.eventEmitter.once(event, fn, context);
    return this;
  }

  /** Remove the listeners of a given event. */
  public removeListener<K extends EventEmitter.EventNames<T>>(
    event: K,
    fn?: EventEmitter.EventListener<T, K>,
    context?: C,
    once?: boolean
  ): this {
    this.eventEmitter.removeListener(event, fn, context, once);
    return this;
  }

  /** Remove the listeners of a given event. */
  public off<K extends EventEmitter.EventNames<T>>(
    event: K,
    fn?: EventEmitter.EventListener<T, K>,
    context?: C,
    once?: boolean
  ): this {
    this.eventEmitter.off(event, fn, context, once);
    return this;
  }
}

export default PublicEventEmitter;
