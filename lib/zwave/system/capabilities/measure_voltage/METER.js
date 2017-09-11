'use strict';

module.exports = {
	get: 'METER_GET',
	getParser: () => ({
		Properties1: {
			Scale: 1,
		},
		'Scale 2': 0,
	}),
	report: 'METER_REPORT',
	reportParser: report => {
		if (report.hasOwnProperty('Properties1') &&
			report.Properties1.hasOwnProperty('Scale bit 2') &&
			report.Properties1['Scale bit 2'] === true &&
			report.hasOwnProperty('Properties2') &&
			report.Properties2.hasOwnProperty('Scale bits 10') &&
			report.Properties2['Scale bits 10'] === 0) {
			return report['Meter Value (Parsed)'];
		}
		return null;
	},
};