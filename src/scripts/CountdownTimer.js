export default class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.refs = {
      day: document.querySelector(`${selector} [data-value="days"]`),
      hour: document.querySelector(`${selector} [data-value="hours"]`),
      min: document.querySelector(`${selector} [data-value="mins"]`),
      sec: document.querySelector(`${selector} [data-value="secs"]`),
    };
    this.targetDate = targetDate;
  }

  startTimer() {
    setInterval(() => {
      const now = Date.now();
      const time = this.targetDate.getTime() - now;
      this.updateUI(time);
    }, 1000);
  }

  days(time) {
    return Math.floor(time / (1000 * 60 * 60 * 24));
  }

  hours(time) {
    return Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }

  mins(time) {
    return Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  }

  secs(time) {
    return Math.floor((time % (1000 * 60)) / 1000);
  }

  updateUI(time) {
    this.refs.day.textContent = this.days(time);
    this.refs.hour.textContent = this.hours(time);
    this.refs.min.textContent = this.mins(time);
    this.refs.sec.textContent = this.secs(time);
  }
}