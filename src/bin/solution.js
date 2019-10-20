const ONE_SECOND_DEGREES = 6;
const ONE_SECOND_FACTOR = 1 / Framework.SPEED * ONE_SECOND_DEGREES;

class MyClock extends Framework.Clock {
  constructor() {
    super();

    this.arrows.push(new Framework.Arrow('seconds', {
      color: 'red',
    }));

    this.arrows.push(new Framework.Arrow('minutes', {
      weight: 3,
      length: 80,
    }));

    this.arrows.push(new Framework.Arrow('hours', {
      weight: 3,
      length: 60,
    }));

    this.arrows.push(new Framework.Arrow('days', {
      weight: 3,
      length: 60,
    }));

    this.buttons.push(new Framework.Button('Reset', () => {
      const [seconds, minutes, hours, days] = this.arrows;
      const fullRound = 600;
      const countOfRounds = Math.floor(this.tick / fullRound);
      const secondsPosition = seconds._getPos() - 360 * countOfRounds;
      const minutesPosition = minutes._getPos() - 360 * Math.floor(countOfRounds / 60);
      const hoursPosition = hours._getPos() - 360 * Math.floor(countOfRounds / 3600);
      const daysPosition = days._getPos() - 360 * Math.floor(countOfRounds / 86400);
      console.log(secondsPosition, minutesPosition);
      seconds.rotateFactor = secondsPosition / -30;
      minutes.rotateFactor = minutesPosition / -30;
      hours.rotateFactor = hoursPosition / -30;
      days.rotateFactor = daysPosition / -30;

      this.tick = 0;
    }));

    this.tick = 0;
  }

  onBeforeTick() {
    this.tick++;

  }

  onAfterTick() {
    const [seconds, minutes, hours, days] = this.arrows;
    seconds.rotateFactor = this.tick % 10 ? 0 : ONE_SECOND_FACTOR;
    minutes.rotateFactor = this.tick % 600 ? 0 : ONE_SECOND_FACTOR;
    hours.rotateFactor = this.tick % 36000 ? 0 : ONE_SECOND_FACTOR;
    days.rotateFactor = this.tick % 864000 ? 0 : ONE_SECOND_FACTOR;
  }
}
