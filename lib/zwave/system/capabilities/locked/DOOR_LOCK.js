'use strict';

module.exports = {
	get: 'DOOR_LOCK_OPERATION_GET',
	getOpts: {
		getOnOnline: true,
	},
	set: 'DOOR_LOCK_OPERATION_SET',
	setParser(value) {
		return {
			'Door Lock Mode': (!value) ? 'Door Unsecured' : 'Door Secured',
		};
	},
	report: 'DOOR_LOCK_OPERATION_REPORT',
	reportParser(report) {
		if (report && report.hasOwnProperty('Door Lock Mode')) return report['Door Lock Mode'] === 'Door Secured';
		return null;
	},
};