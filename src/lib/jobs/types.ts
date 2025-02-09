export type Status = 'registered' | 'running' | 'failure' | 'success' | 'unknown';

type job = {
	id: string;
	parent?: string;
	created_at: string;
	started_at: string;
	completed_at: any;
	status: Status;
	error?: Error;
};

export type Job = job & {
	repository?: Repository;
	contribution?: Contribution;
};

export type ContributionJob = job & {
	contribution: Contribution;
};

export type RepositoryJob = job & {
	repository: Repository;
};

export type Repository = {
	url: string;
	name: string;
	contribution_jobs: ContributionJob[];
};

export type Error = {
	message: string;
};

export type Contribution = {
	url: string;
	number: number;
	title: string;
	merged_without_objections: boolean;
	created_at: string;
	merged_at: any;
	result: 'inconclusive' | 'approved' | 'not_approved' | null;
};
