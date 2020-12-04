import './styles.css';
import CountdownTimer from './scripts/CountdownTimer';


const sales = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2021'),
});

sales.startTimer();