/**
 * The ExpressJS namespace.
 * @external ExpressApplicationObject
 * @see {@link http://expressjs.com/3x/api.html#app}
 */ 

/**
 * Mobile Cloud custom code service entry point.
 * @param {external:ExpressApplicationObject}
 * service 
 */
module.exports = function(service) {


	/**
	 *  The file samples.txt in the archive that this file was packaged with contains some example code.
	 */


	service.get('/mobile/custom/ats/appointment/available/:clinicNo/:doctorId/:yearMonth/:day', function(req,res) {
		var result = {};
		var statusCode = 200;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = [{
						"slotTimeFrom": "08:00",
						"slotTimeTo": "08:30",
						"periodDesc": "Morninig",
						"resourceId": "3",
						"slotSerial": "445120",
						"periodPart": "372"
					}, {
						"slotTimeFrom": "08:30",
						"slotTimeTo": "09:00",
						"periodDesc": "Morninig",
						"resourceId": "3",
						"slotSerial": "445121",
						"periodPart": "372"
					}, {
						"slotTimeFrom": "09:00",
						"slotTimeTo": "09:30",
						"periodDesc": "Morninig",
						"resourceId": "3",
						"slotSerial": "445122",
						"periodPart": "372"
					}, {
						"slotTimeFrom": "09:30",
						"slotTimeTo": "10:00",
						"periodDesc": "Morninig",
						"resourceId": "3",
						"slotSerial": "445123",
						"periodPart": "372"
					}, {
						"slotTimeFrom": "10:00",
						"slotTimeTo": "10:30",
						"periodDesc": "Morninig",
						"resourceId": "3",
						"slotSerial": "445124",
						"periodPart": "372"
					}, {
						"slotTimeFrom": "10:30",
						"slotTimeTo": "11:00",
						"periodDesc": "Morninig",
						"resourceId": "3",
						"slotSerial": "445125",
						"periodPart": "372"
					}, {
						"slotTimeFrom": "11:00",
						"slotTimeTo": "11:30",
						"periodDesc": "Morninig",
						"resourceId": "3",
						"slotSerial": "445126",
						"periodPart": "372"
					}, {
						"slotTimeFrom": "11:30",
						"slotTimeTo": "12:00",
						"periodDesc": "Morninig",
						"resourceId": "3",
						"slotSerial": "445127",
						"periodPart": "372"
					}];
			}
		}
		res.status(statusCode).send(result);
	});

	service.get('/mobile/custom/ats/clinic', function(req,res) {
		var result = {};
		var statusCode = 200;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = [{
						"clinicNo": "421",
						"clinicCode": "ANE",
						"clinicDesc": "Anaesthesia"
					}, {
						"clinicNo": "553",
						"clinicCode": "ENT",
						"clinicDesc": "ENT Clinic"
					}, {
						"clinicNo": "543",
						"clinicCode": "CARD",
						"clinicDesc": "Cardiology Clinic"
					}, {
						"clinicNo": "533",
						"clinicCode": "GP",
						"clinicDesc": "General Practice Clinic"
					}, {
						"clinicNo": "545",
						"clinicCode": "INT",
						"clinicDesc": "Internal Medicine Clinic"
					}, {
						"clinicNo": "593",
						"clinicCode": "URO",
						"clinicDesc": "Urology Clinic"
					}, {
						"clinicNo": "373",
						"clinicCode": "DIET",
						"clinicDesc": "Dietetics Clinic"
					}, {
						"clinicNo": "513",
						"clinicCode": "GENSU",
						"clinicDesc": "General Surgery Clinic"
					}, {
						"clinicNo": "583",
						"clinicCode": "ORTHO",
						"clinicDesc": "Orthopedic Clinic"
					}, {
						"clinicNo": "590",
						"clinicCode": "URO000",
						"clinicDesc": "Urology"
					}, {
						"clinicNo": "433",
						"clinicCode": "GYN",
						"clinicDesc": "Obst \u0026 Gyne Clinic"
					}, {
						"clinicNo": "451",
						"clinicCode": "PEDI01",
						"clinicDesc": "Pediatrics"
					}, {
						"clinicNo": "453",
						"clinicCode": "PED",
						"clinicDesc": "Pediatrics Clinic"
					}, {
						"clinicNo": "463",
						"clinicCode": "DERM",
						"clinicDesc": "Dermatology Clinic"
					}, {
						"clinicNo": "483",
						"clinicCode": "DENT",
						"clinicDesc": "Dental Clinic"
					}, {
						"clinicNo": "490",
						"clinicCode": "PHYS00",
						"clinicDesc": "Physiotherapy"
					}, {
						"clinicNo": "493",
						"clinicCode": "PHYS",
						"clinicDesc": "Physiotherapy Clinic"
					}, {
						"clinicNo": "310",
						"clinicCode": "RAD",
						"clinicDesc": "Radiology Services"
					}, {
						"clinicNo": "311",
						"clinicCode": "GENR",
						"clinicDesc": "General  Radiology"
					}, {
						"clinicNo": "313",
						"clinicCode": "CT",
						"clinicDesc": "Ct  Scan"
					}, {
						"clinicNo": "98810",
						"clinicCode": "98810",
						"clinicDesc": "Dialysis Clinic"
					}];
			}
		}
		res.status(statusCode).send(result);
	});

	service.get('/mobile/custom/ats/appointment/available/:clinicNo/:doctorId/:yearMonth', function(req,res) {
		var result = {};
		var statusCode = 200;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = [{
						"monthDay": 1,
						"apptCount": 4,
						"apptReserved": 0,
						"apptAvailable": 4
					}, {
						"monthDay": 2,
						"apptCount": 4,
						"apptReserved": 0,
						"apptAvailable": 4
					}, {
						"monthDay": 3,
						"apptCount": 4,
						"apptReserved": 0,
						"apptAvailable": 4
					}, {
						"monthDay": 4,
						"apptCount": 4,
						"apptReserved": 0,
						"apptAvailable": 4
					}, {
						"monthDay": 7,
						"apptCount": 4,
						"apptReserved": 0,
						"apptAvailable": 4
					}, {
						"monthDay": 8,
						"apptCount": 4,
						"apptReserved": 0,
						"apptAvailable": 4
					}, {
						"monthDay": 9,
						"apptCount": 4,
						"apptReserved": 0,
						"apptAvailable": 4
					}, {
						"monthDay": 10,
						"apptCount": 4,
						"apptReserved": 0,
						"apptAvailable": 4
					}, {
						"monthDay": 11,
						"apptCount": 4,
						"apptReserved": 0,
						"apptAvailable": 4
					}, {
						"monthDay": 14,
						"apptCount": 4,
						"apptReserved": 0,
						"apptAvailable": 4
					}, {
						"monthDay": 15,
						"apptCount": 4,
						"apptReserved": 0,
						"apptAvailable": 4
					}, {
						"monthDay": 16,
						"apptCount": 4,
						"apptReserved": 0,
						"apptAvailable": 4
					}, {
						"monthDay": 17,
						"apptCount": 4,
						"apptReserved": 0,
						"apptAvailable": 4
					}, {
						"monthDay": 18,
						"apptCount": 4,
						"apptReserved": 0,
						"apptAvailable": 4
					}, {
						"monthDay": 21,
						"apptCount": 4,
						"apptReserved": 0,
						"apptAvailable": 4
					}, {
						"monthDay": 22,
						"apptCount": 4,
						"apptReserved": 0,
						"apptAvailable": 4
					}, {
						"monthDay": 23,
						"apptCount": 4,
						"apptReserved": 0,
						"apptAvailable": 4
					}, {
						"monthDay": 24,
						"apptCount": 4,
						"apptReserved": 0,
						"apptAvailable": 4
					}, {
						"monthDay": 25,
						"apptCount": 4,
						"apptReserved": 0,
						"apptAvailable": 4
					}, {
						"monthDay": 28,
						"apptCount": 4,
						"apptReserved": 0,
						"apptAvailable": 4
					}, {
						"monthDay": 29,
						"apptCount": 4,
						"apptReserved": 0,
						"apptAvailable": 4
					}, {
						"monthDay": 30,
						"apptCount": 4,
						"apptReserved": 0,
						"apptAvailable": 4
					}, {
						"monthDay": 31,
						"apptCount": 4,
						"apptReserved": 0,
						"apptAvailable": 4
					}];
			}
		}
		res.status(statusCode).send(result);
	});

	service.post('/mobile/custom/ats/appointment', function(req,res) {
		var result = {};
		var statusCode = 201;
		if (statusCode == 404){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = {
						"message": "ORA-01403: no data found",
						"isPrevent": null
					};
			}
		}
		res.status(statusCode).send(result);
	});

	service.post('/mobile/custom/ats/patient/login', function(req,res) {
		var result = {};
		var statusCode = 201;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = {
						"result": 1,
						"error": null,
						"patientId": "21212"
					};
			}
		}
		if (statusCode == 401){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = {
						"result": 0,
						"error": "100ORA-01403: no data found",
						"patientId": null
					};
			}
		}
		res.status(statusCode).send(result);
	});

	service.get('/mobile/custom/ats/appointment/category', function(req,res) {
		var result = {};
		var statusCode = 200;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = [{
						"categoryNo": "368",
						"categoryCode": "1",
						"categoryDesc": "New Patient"
					}, {
						"categoryNo": "369",
						"categoryCode": "2",
						"categoryDesc": "Followup"
					}, {
						"categoryNo": "370",
						"categoryCode": "3",
						"categoryDesc": "VIPS"
					}, {
						"categoryNo": "371",
						"categoryCode": "4",
						"categoryDesc": "Waiting List"
					}, {
						"categoryNo": "11469",
						"categoryCode": "26",
						"categoryDesc": "extra"
					}, {
						"categoryNo": "55349",
						"categoryCode": "27",
						"categoryDesc": "Referrals"
					}, {
						"categoryNo": "55352",
						"categoryCode": "28",
						"categoryDesc": "In Followup"
					}];
			}
		}
		res.status(statusCode).send(result);
	});

	service.get('/mobile/custom/ats/appointment/period', function(req,res) {
		var result = {};
		var statusCode = 200;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = [{
						"periodNo": "372",
						"periodCode": "1",
						"periodDesc": "Morninig"
					}, {
						"periodNo": "373",
						"periodCode": "2",
						"periodDesc": "Afternoon"
					}, {
						"periodNo": "374",
						"periodCode": "3",
						"periodDesc": "Evening"
					}, {
						"periodNo": "22234",
						"periodCode": "4",
						"periodDesc": "Night"
					}];
			}
		}
		res.status(statusCode).send(result);
	});

	service.get('/mobile/custom/ats/patient/:patientId', function(req,res) {
		var result = {};
		var statusCode = 200;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = {
						"patientCode": "21212",
						"patientName": "Patient  Name",
						"mobileNo": "0582913219",
						"homeNo": "0114100000",
						"dobG": "19-05-1982",
						"dobH": "19-05-1982",
						"address": "الرياض - حي الروضة",
						"motherName": "null",
						"motherNameS": "null"
					};
			}
		}
		res.status(statusCode).send(result);
	});

	service.get('/mobile/custom/ats/lab/results/:orderNo', function(req,res) {
		var result = {};
		var statusCode = 200;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = [{
						"testId": "51476",
						"testName": "CULTURE\u0026SENSITIVITY GENITAL FEMALE",
						"result": "View Details",
						"isDetailed": 1,
						"resultDetails": "NORMAL VAGINAL FLORA ,GROWTH RATE: Scanty growth of, COLONY COUNT: 10^3 CFU/ml of\n",
						"isGroup": 0,
						"unitName": null,
						"normalRange": null,
						"nrMin": null,
						"nrMax": null,
						"resultDateG": "27-03-2010 00:00",
						"resultDateH": "11-04-1431 00:00",
						"companyId": "1",
						"patientType": "2",
						"patientId": "21212",
						"admissionNo": null,
						"opdSectionNo": "483",
						"opdSerialNo": "126841",
						"orderNo": "4046866",
						"sectionNo": "483",
						"specimenNo": "1262507",
						"ordSequenceNo": "24358662",
						"isHigh": 0,
						"isLow": 0,
						"groupItem": "51476",
						"status": "Available"
					}];
			}
		}
		res.status(statusCode).send(result);
	});

	service.get('/mobile/custom/ats/patient/:patientId/timeline', function(req,res) {
		var result = {};
		var statusCode = 200;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = {
					    "errors": [],
					    "items": [
					        {
					            "actionDate": "2014-09-03 00:00:00",
					            "actionTime": "08:00 AM",
					            "categoryCode": "10",
					            "categoryDesc": "Appointment",
					            "categoryDesc_ar": "????",
					            "categoryDesc_en": "Appointment",
					            "companyId": "1",
					            "doctorName": "Magdy Abdul Raof Al Sabea",
					            "doctorName_ar": "مجدي عبد الرؤف السبع",
					            "doctorName_en": "Magdy Abdul Raof Al Sabea",
					            "orderNo": null,
					            "paging": "1",
					            "patientId": "21212",
					            "sectionName": null,
					            "sectionName_ar": null,
					            "sectionName_en": null,
					            "serialNo": "12489",
					            "status": "1",
					            "tempNo": null
					        },
					        {
					            "actionDate": "2014-09-17 00:00:00",
					            "actionTime": "01:00 PM",
					            "categoryCode": "10",
					            "categoryDesc": "Appointment",
					            "categoryDesc_ar": "????",
					            "categoryDesc_en": "Appointment",
					            "companyId": "1",
					            "doctorName": "Hani Ali Mohammed Omar",
					            "doctorName_ar": "هاني علي محمد عمر",
					            "doctorName_en": "Hani Ali Mohammed Omar",
					            "orderNo": null,
					            "paging": "2",
					            "patientId": "21212",
					            "sectionName": null,
					            "sectionName_ar": null,
					            "sectionName_en": null,
					            "serialNo": "12513",
					            "status": "1",
					            "tempNo": null
					        },
					        {
					            "actionDate": "2015-08-29 00:00:00",
					            "actionTime": "08:00 AM",
					            "categoryCode": "10",
					            "categoryDesc": "Appointment",
					            "categoryDesc_ar": "????",
					            "categoryDesc_en": "Appointment",
					            "companyId": "1",
					            "doctorName": "Samar  Samar",
					            "doctorName_ar": "سمر  سمر",
					            "doctorName_en": "Samar  Samar",
					            "orderNo": null,
					            "paging": "3",
					            "patientId": "21212",
					            "sectionName": null,
					            "sectionName_ar": null,
					            "sectionName_en": null,
					            "serialNo": "12710",
					            "status": "1",
					            "tempNo": null
					        },
					        {
					            "actionDate": "2015-10-26 00:00:00",
					            "actionTime": "12:30 PM",
					            "categoryCode": "10",
					            "categoryDesc": "Appointment",
					            "categoryDesc_ar": "????",
					            "categoryDesc_en": "Appointment",
					            "companyId": "1",
					            "doctorName": "Hani Ali Mohammed Omar",
					            "doctorName_ar": "هاني علي محمد عمر",
					            "doctorName_en": "Hani Ali Mohammed Omar",
					            "orderNo": null,
					            "paging": "4",
					            "patientId": "21212",
					            "sectionName": null,
					            "sectionName_ar": null,
					            "sectionName_en": null,
					            "serialNo": "12730",
					            "status": "6",
					            "tempNo": null
					        },
					        {
					            "actionDate": "2015-12-06 00:00:00",
					            "actionTime": "10:00 AM",
					            "categoryCode": "10",
					            "categoryDesc": "Appointment",
					            "categoryDesc_ar": "????",
					            "categoryDesc_en": "Appointment",
					            "companyId": "1",
					            "doctorName": "Hani Ali Mohammed Omar",
					            "doctorName_ar": "هاني علي محمد عمر",
					            "doctorName_en": "Hani Ali Mohammed Omar",
					            "orderNo": null,
					            "paging": "5",
					            "patientId": "21212",
					            "sectionName": null,
					            "sectionName_ar": null,
					            "sectionName_en": null,
					            "serialNo": "12753",
					            "status": "6",
					            "tempNo": null
					        },
					        {
					            "actionDate": "2016-02-23 00:00:00",
					            "actionTime": "02:30 PM",
					            "categoryCode": "10",
					            "categoryDesc": "Appointment",
					            "categoryDesc_ar": "????",
					            "categoryDesc_en": "Appointment",
					            "companyId": "1",
					            "doctorName": "Rana Adnan Dwai",
					            "doctorName_ar": "رانا عدنان دواي",
					            "doctorName_en": "Rana Adnan Dwai",
					            "orderNo": null,
					            "paging": "6",
					            "patientId": "21212",
					            "sectionName": null,
					            "sectionName_ar": null,
					            "sectionName_en": null,
					            "serialNo": "12810",
					            "status": "1",
					            "tempNo": null
					        }
					    ],
					    "page": 1,
					    "result": 1
					};
			}
		}
		res.status(statusCode).send(result);
	});

	service.get('/mobile/custom/ats/clinic/:clinicNo/doctors', function(req,res) {
		var result = {};
		var statusCode = 200;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = [{
						"staffId": "10453",
						"doctorCode": "10453",
						"doctorName": "Gada Sami Badawi Abdel Hamid",
						"resourceId": "6",
						"resourceDesc": "Anesthesia Clinic"
					}, {
						"staffId": "125253",
						"doctorCode": "125253",
						"doctorName": "Samar  Samar",
						"resourceId": "152",
						"resourceDesc": "Samar Samar"
					}, {
						"staffId": "10459",
						"doctorCode": "10459",
						"doctorName": "Wael Mohammed Elmarghany Mossa",
						"resourceId": "135",
						"resourceDesc": "ok"
					}, {
						"staffId": "10134",
						"doctorCode": "10134",
						"doctorName": "Amr Fathi Ali",
						"resourceId": "167",
						"resourceDesc": "1"
					}];
			}
		}
		res.status(statusCode).send(result);
	});

};
