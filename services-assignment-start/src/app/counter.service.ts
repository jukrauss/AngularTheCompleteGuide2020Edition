export class CounterService {

  constructor() { }

  counter: number = 0;

  count(){
    this.counter++;
    console.log(this.counter);
  }
}
