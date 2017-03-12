/* SystemJS module definition */
declare var module: {
  id: string;
};

interface Callback { (data: any): void; }

declare class EventSource {
    onmessage: Callback;
    onerror: (error) => void;
    onopen: () => void;
    addEventListener(event: string, cb: Callback): void;
    close(): void;
    
    constructor(name: string);
}