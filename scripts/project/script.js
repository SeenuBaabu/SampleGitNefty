var rewardedSlot, rewardedSlot2, rewardedSlot3, requestedTimestamp, adSlotClosed, isRewarded, Score, BestScore,isReplay, Level_no = {};

        let rc_val;
        googletag = window.googletag || { cmd: [] };
        googletag.cmd.push(() => {

            // This listener will be called when an impression is considered viewable.
            googletag.pubads().addEventListener('impressionViewable', function (event) {
                var slotId = event.slot.getSlotElementId();
              //  printEventMessage('Impression has become viewable.', slotId);
            });

            // This listener will be called when a slots creative iframe load event fires.
            googletag.pubads().addEventListener('slotOnload', function (event) {
                var slotId = event.slot.getSlotElementId();
               // printEventMessage('Creative iframe load event has fired.', slotId);
            });

            // This listener will be called when a slot has finished rendering.
            googletag.pubads().addEventListener('slotRenderEnded', function (event) {
                var slotId = event.slot.getSlotElementId();

                // Record details of the rendered ad.
            /*    var details = {
                    'Advertiser ID': event.advertiserId,
                    'Campaign ID': event.campaignId,
                    'Creative ID': event.creativeId,
                    'Is empty?': event.isEmpty,
                    'Line Item ID': event.lineItemId,
                    'Size': event.size.join('x'),
                    'Source Agnostic Creative ID': event.sourceAgnosticCreativeId,
                    'Source Agnostic Line Item ID': event.sourceAgnosticLineItemId
                }*/

              //  printEventMessage('Slot has finished rendering.', slotId, details);
            });

            // This listener will be called when the specified service actually
            // sets an ad request for a slot. Each slot will fire this event, even
            // though they may be batched together in a single request if single
            // request architecture (SRA) is enabled.
            googletag.pubads().addEventListener('slotRequested', function (event) {
                var slotId = event.slot.getSlotElementId();
                /*requestedTimestamp[slotId] = Date.now();*/
              //  printEventMessage('Slot has been requested.', slotId);
            });

            // This listener will be called when an ad response has been received for
            // a slot.
            googletag.pubads().addEventListener('slotResponseReceived', function (event) {
                var slotId = event.slot.getSlotElementId();
              //  printEventMessage('Ad response has been received.', slotId);
            });

            // This listener will be called whenever the on-screen percentage of an ad slot's
            // area changes.
            googletag.pubads().addEventListener('slotVisibilityChanged', function (event) {
                var slotId = event.slot.getSlotElementId();

                // Record details of the event.
                var details = { 'Visible area': event.inViewPercentage + '%' };

              //  printEventMessage('Visibility has changed.', slotId, details);
            });

            googletag.pubads().addEventListener('rewardedSlotReady', function (event) {
                //if (confirm('want to see a rewarded ad?')) {
                event.makeRewardedVisible();
                
                //} else {
                //    googletag.destroySlots([rewardedSlot]);
                //}
            });

            googletag.pubads().addEventListener('rewardedSlotGranted', function (event) {
               // current_value = parseInt(document.getElementById("reward_label").innerHTML);
                reward = event.payload;
                isRewarded = true;
                
              console.log("video watched");
                console.log(JSON.stringify(reward));
                console.log(JSON.stringify(reward.amount));
             //   document.getElementById("reward_label").innerHTML = JSON.stringify(current_value + reward.amount);

                // alert('granted! ' + JSON.stringify(evt.payload));
            });

            googletag.pubads().addEventListener('rewardedSlotClosed', function (event) {
                // alert('Closed by the user!');
				adSlotClosed = true;
              console.log("closed");
				console.log('ad slot is closed');				
                googletag.destroySlots([rewardedSlot]);
            });

            // Enable SRA and services.
            // googletag.pubads().enableAsyncRendering();
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
        });

        function printEventMessage(eventMessage, slotId, details = {}) {
            var row = document.getElementsByClassName('status-row')[0].cloneNode(true);

            var cells = row.getElementsByClassName('status-cell');
            cells[0].innerHTML = slotId;
            cells[1].innerHTML = eventMessage;
            for (var key in details) {
                cells[1].innerHTML += '<br/>&ensp;&ensp;' + key + ': ' + details[key];
            }
            cells[2].innerHTML = (Date.now() - requestedTimestamp[slotId]) + 'ms';

            document.getElementsByClassName('status-container')[0].appendChild(row);
        }

        function myFunction() {
            window.googletag.cmd.push(function () {
                rewardedSlot = googletag.defineOutOfPageSlot('/1056029/dwi_test_video', googletag.enums.OutOfPageFormat.REWARDED).addService(googletag.pubads());
                rewardedSlot
                    .setTargeting('test_request', '1')
                    .addService(googletag.pubads());
                window.googletag.display(rewardedSlot);

               /* analytics.logEvent('select_content', {
                    content_type: 'image',
                    content_id: 'P12453',
                    items: [{ name: 'Kittens' }]
                });*/
            });
        }

        function myFunction2() {
            googletag.cmd.push(function () {
                rewardedSlot2 = googletag.defineOutOfPageSlot('22029514685/GC_Leaderboard/chhota-bheem-bridge-builder', googletag.enums.OutOfPageFormat.REWARDED).addService(googletag.pubads());
                rewardedSlot2
                    .setTargeting('test_request', '1')
                    .addService(googletag.pubads());
                googletag.display(rewardedSlot2);
            });
        }

        function myFunction3() {
            googletag.cmd.push(function () {
                rewardedSlot3 = googletag.defineOutOfPageSlot('/6062/sanghan_rweb_ad_unit', googletag.enums.OutOfPageFormat.REWARDED).addService(googletag.pubads());
                rewardedSlot3
                    // .setTargeting('test_request', '1')
                    .addService(googletag.pubads());
                googletag.display(rewardedSlot3);
            });
        }