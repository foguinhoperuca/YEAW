define([
	'moment',
	'config'
	, 'app'
	, 'collections/generic'
	, 'views/timesheet/list'
	, 'text!../../../../../../../data/test/timesheet/noDaysLater.json'
	, 'text!../../../../../../../data/test/timesheet/withDaysLater.json'
], function (Moment, Config, App, TimesheetCollection, TimesheetListView, NoDaysLater, WithDaysLater) {
	return describe('Timesheet.', function() {
		describe('View', function() {
			var listView = new TimesheetListView(new TimesheetCollection())
				, configStartTime = Moment(Config.timesheet.startTime, 'HH:mm')
				, configEndTime = Moment(Config.timesheet.endTime, 'HH:mm')
				;

			describe('Painel', function() {
				describe('Total Days Late To Work.', function() {
				var noDayLaterToWork = new TimesheetCollection(JSON.parse(NoDaysLater))
					, withDayLaterToWork = new TimesheetCollection(JSON.parse(WithDaysLater))
					;

					it('Should detect that has one or more day late to work.', function() {
						expect(listView.daysLateToWork(withDayLaterToWork.toJSON(), configStartTime).length).toEqual(1);
					});

					it('Should return that has no day late to work.', function() {
						expect(listView.daysLateToWork(noDayLaterToWork.toJSON(), configStartTime).length).toEqual(0);
					});
				});

				describe('Total Minutes After Start.', function() {
					it('Should implement test!', function() {
						return true;
					});
				});

				describe('Total Extra Time.', function() {
					it('Should implement test!', function() {
						return true;
					});
				});

				describe('Total Leaving Early.', function() {
					it('Should implement test!', function() {
						return true;
					});
				});

				describe('Status.', function() {
					it('Should implement test!', function() {
						return true;
					});
				});
			});

		});

		describe('Model', function() {
			it('Should calculate extra time in one day.', function() {
				return true;
			});
		});
	});
});
