


const scriptsInEvents = {

		async Maincode_Event2_Act7(runtime, localVars)
		{
			adSlotClosed=false;
		},

		async EventSheet1_Event2_Act12(runtime, localVars)
		{
			isRewarded = false;
		},

		async EventSheet1_Event36_Act4(runtime, localVars)
		{
			var Level_no = 2;
			console.log(Level_no);
			sendCustomAnalyticsEvent('game_level', {Level_no});
			
		},

		async EventSheet1_Event36_Act5(runtime, localVars)
		{
			myFunction();
		},

		async EventSheet1_Event37_Act3(runtime, localVars)
		{
			var Level_no = 1;
			console.log(Level_no);
			sendCustomAnalyticsEvent("game_replay", {Level_no, score:0, highScore: 0 });
			
		},

		async EventSheet1_Event38_Act2(runtime, localVars)
		{
			var Level_no = 0;
			console.log(Level_no);
			sendCustomAnalyticsEvent('game_level', {Level_no});
		},

		async EventSheet1_Event39_Act2(runtime, localVars)
		{
			var Level_no = 0;
			console.log(Level_no);
			sendCustomAnalyticsEvent("game_end", {Level_no, score : 0, highScore: 0 });
			
		},

		async EventSheet1_Event48_Act3(runtime, localVars)
		{
			myFunction();
		},

		async EventSheet1_Event50_Act10(runtime, localVars)
		{
			adSlotClosed = false
			isRewarded = false
		},

		async EventSheet1_Event52(runtime, localVars)
		{
			if(adSlotClosed && isRewarded)
			{
				runtime.globalVars.isRewardedRV = true;
				console.log("Event Sheet  " + runtime.globalVars.isRewardedRV)
				console.log("isRewarded " + isRewarded)
			}
		},

		async EventSheetHud_Event2_Act2(runtime, localVars)
		{
			var Level_no = runtime.globalVars.Level_no;
			sendCustomAnalyticsEvent('game_level', {Level_no});
			console.log(Level_no);
		},

		async EventSheetHud_Event3_Act1(runtime, localVars)
		{
			let firstPlay = true;
			sendCustomAnalyticsEvent("game_start", {});
		},

		async EventSheet2_Event2_Act12(runtime, localVars)
		{
			isRewarded = false;
		},

		async EventSheet2_Event36_Act3(runtime, localVars)
		{
			var Level_no = 3;
			sendCustomAnalyticsEvent('game_level', {Level_no});
			console.log(Level_no);
		},

		async EventSheet2_Event36_Act4(runtime, localVars)
		{
			myFunction();
		},

		async EventSheet2_Event37_Act2(runtime, localVars)
		{
			var Level_no = 2;
			sendCustomAnalyticsEvent("game_replay", {Level_no, score:0, highScore: 0 });
			console.log(Level_no);
			
		},

		async EventSheet2_Event38_Act2(runtime, localVars)
		{
			var Level_no = 1;
			sendCustomAnalyticsEvent('game_level', {Level_no});
			console.log(Level_no);
		},

		async EventSheet2_Event39_Act2(runtime, localVars)
		{
			var Level_no = 0;
			sendCustomAnalyticsEvent("game_end", {Level_no, score : 0, highScore: 0 });
			console.log(Level_no);
		},

		async EventSheet2_Event49_Act3(runtime, localVars)
		{
			myFunction();
		},

		async EventSheet2_Event51_Act10(runtime, localVars)
		{
			adSlotClosed = false
			isRewarded = false
		},

		async EventSheet2_Event53(runtime, localVars)
		{
			if(adSlotClosed && isRewarded)
			{
				runtime.globalVars.isRewardedRV = true;
				console.log("Event Sheet  " + runtime.globalVars.isRewardedRV)
				console.log("isRewarded " + isRewarded)
			}
		},

		async EventSheet3_Event2_Act12(runtime, localVars)
		{
			isRewarded = false;
		},

		async EventSheet3_Event36_Act3(runtime, localVars)
		{
			var Level_no = 4;
			sendCustomAnalyticsEvent('game_level', {Level_no});
			console.log(Level_no);
		},

		async EventSheet3_Event36_Act4(runtime, localVars)
		{
			myFunction();
		},

		async EventSheet3_Event37_Act2(runtime, localVars)
		{
			var Level_no = 3;
			sendCustomAnalyticsEvent("game_replay", {Level_no, score:0, highScore: 0 });
			console.log(Level_no);
			
		},

		async EventSheet3_Event38_Act2(runtime, localVars)
		{
			var Level_no = 2;
			sendCustomAnalyticsEvent('game_level', {Level_no});
			console.log(Level_no);
		},

		async EventSheet3_Event39_Act2(runtime, localVars)
		{
			var Level_no = 0;
			sendCustomAnalyticsEvent("game_end", {Level_no, score : 0, highScore: 0 });
			console.log(Level_no);
		},

		async EventSheet3_Event49_Act3(runtime, localVars)
		{
			myFunction();
		},

		async EventSheet3_Event51_Act10(runtime, localVars)
		{
			adSlotClosed = false
			isRewarded = false
		},

		async EventSheet3_Event53(runtime, localVars)
		{
			if(adSlotClosed && isRewarded)
			{
				runtime.globalVars.isRewardedRV = true;
				console.log("Event Sheet  " + runtime.globalVars.isRewardedRV)
				console.log("isRewarded " + isRewarded)
			}
		},

		async EventSheet4_Event2_Act12(runtime, localVars)
		{
			isRewarded = false;
		},

		async EventSheet4_Event36_Act2(runtime, localVars)
		{
			var Level_no = 4;
			sendCustomAnalyticsEvent("game_replay", {Level_no, score:0, highScore: 0 });
			console.log(Level_no);
			
		},

		async EventSheet4_Event37_Act2(runtime, localVars)
		{
			var Level_no = 3;
			sendCustomAnalyticsEvent('game_level', {Level_no});
			console.log(Level_no);
		},

		async EventSheet4_Event38_Act2(runtime, localVars)
		{
			var Level_no = 0;
			sendCustomAnalyticsEvent("game_end", {Level_no, score : 0, highScore: 0 });
			console.log(Level_no);
		},

		async EventSheet4_Event48_Act3(runtime, localVars)
		{
			myFunction();
		},

		async EventSheet4_Event50_Act10(runtime, localVars)
		{
			adSlotClosed = false
			isRewarded = false
		},

		async EventSheet4_Event52(runtime, localVars)
		{
			if(adSlotClosed && isRewarded)
			{
				runtime.globalVars.isRewardedRV = true;
				console.log("Event Sheet  " + runtime.globalVars.isRewardedRV)
				console.log("isRewarded " + isRewarded)
			}
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

