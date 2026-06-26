

export type ActivityCategory ='DRYLAND'
export type DrylandActivity = 'CO2_TABLE' | 'BOX_BREATHING' | 'DIAPHRAGMATIC' | 'APNEA_WALK'

export interface BaseBlueprint{
    id: string;
    name: string;
    category: ActivityCategory;
    createdAtUser: string;
}

export interface DrylandBlueprint extends BaseBlueprint {
    category: 'DRYLAND';
    type: DrylandActivity;
    parameters: {
        baseHoldSec: number;
        baseRestSec: number;
        restDropPerRoundSec: number;
        totalRounds: number;
    };
}

export interface ScheduledSession {
    id: string;
    scheduledDateUtc: string;
    status: 'PENDING' | 'COMPLETED_SUCCESS' | 'COMPLETED_FAILURE' | 'SKIPPED';
    workoutData: DrylandBlueprint;
}

export interface Schedule{
    id: string;
    name: string;
    status: 'ACTIVE' | 'COMPLETED' | 'ARCHIVED';
    startDateUtc: string;
    endDateUtc: string;
    sessions: ScheduledSession[];
}

