export default class countdown{

  constructor(futureDate){
    this.futureDate = futureDate;
  }

  get _now(){
    return new Date();
  }

  get _futureDate(){
    if(this.futureDate instanceof Date){
      return this.futureDate;
    }
    else{
      return new Date(this.futureDate);
    }
  }

  get difference(){
    return this._futureDate.getTime() - this._now.getTime();
  }

  get days(){
    return Math.floor(this.difference / (24 * 60 * 60 * 1000));
  }

  get hours(){
    return Math.floor(this.difference / (60 * 60 * 1000));
  }

  get minutes(){
    return Math.floor(this.difference / (60 * 1000));
  }

  get seconds(){
    return Math.floor(this.difference / (1000));
  }

  get final(){
    const days = this.days;
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;
    return{
      days,
      hours,
      minutes,
      seconds,
    }
  }
}