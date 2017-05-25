export class CounterService {
	private activeToInactiveCounter = 0;
	private inactiveToActiveCounter = 0;

	public incrementInactiveToActiveCounter () {
		this.inactiveToActiveCounter++;
		console.log('inactiveToActiveCounter: ', this.inactiveToActiveCounter);
	}

	public incrementActiveToInactiveCounter () {
		this.activeToInactiveCounter++;
		console.log('activeToInactiveCounter: ', this.activeToInactiveCounter);
	}
}