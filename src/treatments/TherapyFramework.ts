/**
 * Interface defining the parameters required for treatment application
 */
export interface TreatmentParams {
  /** The type of treatment being applied */
  treatmentType: string;
  
  /** The dosage or intensity of the treatment */
  dosage: number;
  
  /** The duration over which the treatment is applied */
  duration: number;
  
  /** Additional parameters specific to the treatment type */
  [key: string]: any;
}

/**
 * Framework for applying and managing therapeutic interventions
 */
export class TherapyFramework {
  private treatments: Array<{params: TreatmentParams, timestamp: number}> = [];
  
  /**
   * Applies a therapeutic intervention
   * @param params - Parameters defining the treatment to apply
   */
  public applyTreatment(params: TreatmentParams): void {
    this.treatments.push({
      params,
      timestamp: Date.now()
    });
  }
  
  /**
   * Gets all applied treatments
   * @returns Array of treatment applications with their parameters and timestamps
   */
  public getTreatments(): Array<{params: TreatmentParams, timestamp: number}> {
    return [...this.treatments];
  }
  
  /**
   * Clears all recorded treatments
   */
  public clearTreatments(): void {
    this.treatments = [];
  }
}