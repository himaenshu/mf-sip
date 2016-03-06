SIP_AMOUNT=1000;

function growth(data, sip_day){
	var investment = SIP_AMOUNT;
	var units = SIP_AMOUNT/data[0]['nav'];
	data.each |day_data|{
		if (day_data['date'].day == sip_day)
			investment = investment + SIP_AMOUNT;
			var sip_purchase = (SIP_AMOUNT/day_data['nav']);
			units = units + sip_purchase;
		}
	}
	var value = units * data.last['nav'];
	var growth_percent = ((value-investment)/investment)*100;
	return [value, growth_percent];
}

