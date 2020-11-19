# public-event-emitter

This package provides a wrapper around [eventemitter3](https://www.npmjs.com/package/eventemitter3) that only exposes event handler addition and removal methods.

## Install

```sh
# If you use npm
npm install --save-dev public-event-emitter

# If you use yarn
yarn add public-event-emitter
```

## Usage

The main use case for `PublicEventEmitter` is to hide the `emit()` and other internal methods from the public interface of your class.

You can either inject an `EventEmitter` object manually if you want to use the `PublicEventEmitter` object directly or extend `PublicEventEmitter` in one of your own classes. In this case, the protected `eventEmitter` object will be available in your subclass.

```ts
import { EventEmitter } from "eventemitter3";
import { PublicEventEmitter } from "public-event-emitter";

interface MyEventMap {
  event1: (n: number) => void;
  event2: (s: string) => void;
  error: (error: Error) => void;
}

// Option 1: Manually create an event emitter object

const eventEmitter = new EventEmitter<MyEventMap>();
const publicEventEmitter = new PublicEventEmitter<MyEventMap>(eventEmitter);

publicEventEmitter.on("event1", (n) => console.log(n));
eventEmitter.emit("event1", 42);

// Option 2: Inherit from PublicEventEmitter

class MyClass extends PublicEventEmitter<MyEventMap> {
  public someMethod() {
    this.eventEmitter.emit("event1", 42);
  }
}

const o = new MyClass();

o.on("event1", (n) => console.log(n));
o.someMethod();
```

## License

[MIT](LICENSE)
