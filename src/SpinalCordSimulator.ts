export class SpinalCordSimulator {
  private time: number = 0;
  private inflammationLevel: number = 0;
  private scarTissue: number = 0;
  private nerveFibers: number = 1000;
  private therapeuticAgents: number = 0;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.time = 0;
    this.inflammationLevel = 0;
    this.scarTissue = 0;
    this.nerveFibers = 1000;
    this.therapeuticAgents = 0;
  }

  public step(timeStep: number = 1): void {
    this.time += timeStep;
    
    // Simulate inflammation decay over time
    this.inflammationLevel = Math.max(0, this.inflammationLevel - 0.05 * timeStep);
    
    // Simulate scar tissue formation
    if (this.inflammationLevel > 0.5) {
      this.scarTissue += 0.1 * timeStep;
    }
    
    // Simulate nerve fiber growth
    const growthRate = 0.02 * this.therapeuticAgents - 0.01 * this.scarTissue;
    this.nerveFibers = Math.max(0, this.nerveFibers + growthRate * timeStep);
    
    // Reduce therapeutic agents over time
    this.therapeuticAgents = Math.max(0, this.therapeuticAgents - 0.02 * timeStep);
  }

  public introduceTherapy(amount: number): void {
    this.therapeuticAgents += amount;
    this.inflammationLevel = Math.min(1, this.inflammationLevel + 0.1);
  }

  public getSimulationState(): {
    time: number;
    inflammation: number;
    scarTissue: number;
    nerveFibers: number;
    therapeuticAgents: number;
  } {
    return {
      time: this.time,
      inflammation: this.inflammationLevel,
      scarTissue: this.scarTissue,
      nerveFibers: this.nerveFibers,
      therapeuticAgents: this.therapeuticAgents
    };
  }

  public getHealingProgress(): number {
    return (this.nerveFibers / 1000) * 100;
  }
}