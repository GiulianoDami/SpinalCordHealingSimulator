export interface CellState {
  inflammation: number;
  scarTissue: number;
  nerveGrowth: number;
  therapeuticAgents: number;
}

export class CellularModel {
  private state: CellState;
  private readonly maxInflammation: number = 100;
  private readonly maxScarTissue: number = 100;
  private readonly maxNerveGrowth: number = 100;
  private readonly maxTherapeuticAgents: number = 100;

  constructor(initialState?: Partial<CellState>) {
    this.state = {
      inflammation: initialState?.inflammation || 50,
      scarTissue: initialState?.scarTissue || 30,
      nerveGrowth: initialState?.nerveGrowth || 20,
      therapeuticAgents: initialState?.therapeuticAgents || 0
    };
  }

  public updateInflammation(change: number): void {
    this.state.inflammation = Math.max(0, Math.min(this.maxInflammation, this.state.inflammation + change));
  }

  public updateScarTissue(change: number): void {
    this.state.scarTissue = Math.max(0, Math.min(this.maxScarTissue, this.state.scarTissue + change));
  }

  public updateNerveGrowth(change: number): void {
    this.state.nerveGrowth = Math.max(0, Math.min(this.maxNerveGrowth, this.state.nerveGrowth + change));
  }

  public updateTherapeuticAgents(change: number): void {
    this.state.therapeuticAgents = Math.max(0, Math.min(this.maxTherapeuticAgents, this.state.therapeuticAgents + change));
  }

  public getState(): CellState {
    return { ...this.state };
  }

  public getInflammation(): number {
    return this.state.inflammation;
  }

  public getScarTissue(): number {
    return this.state.scarTissue;
  }

  public getNerveGrowth(): number {
    return this.state.nerveGrowth;
  }

  public getTherapeuticAgents(): number {
    return this.state.therapeuticAgents;
  }

  public reset(): void {
    this.state = {
      inflammation: 50,
      scarTissue: 30,
      nerveGrowth: 20,
      therapeuticAgents: 0
    };
  }
}