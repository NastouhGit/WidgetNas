var WNPreLoaderDelayStart = 500;
var WNPreLoaderTimeout = 30000;
var WNPreLoderId = 'preloader';
var _PreLoaderWaitCount = 0;
var _WNPreLoaderTimeoutTimer: any;
function wnStopPreLoaderTimeout() {
    if (_WNPreLoaderTimeoutTimer != 0) {
        clearTimeout(_WNPreLoaderTimeoutTimer);
        _WNPreLoaderTimeoutTimer = 0;
    }
}

function wnShowPreLoaderTimeout(show: boolean, _WNPreLoaderTimeout: number = WNPreLoaderTimeout, _WNPreLoaderDelayStart: number = 0, _WNPreLoderId: string = WNPreLoderId) {
    wnShowPreLoader(show, _WNPreLoderId, _WNPreLoaderDelayStart, _WNPreLoaderTimeout);
}
function showPreLoaderDelay(show: boolean, _WNPreLoaderDelayStart: number = 0, _WNPreLoaderTimeout: number = WNPreLoaderTimeout, _WNPreLoderId: string = WNPreLoderId) {
    wnShowPreLoader(show, _WNPreLoderId, _WNPreLoaderDelayStart, _WNPreLoaderTimeout);
}
function wnShowPreLoader(show: boolean, _WNPreLoderId: string = WNPreLoderId, _WNPreLoaderDelayStart: number = WNPreLoaderDelayStart, _WNPreLoaderTimeout: number = WNPreLoaderTimeout) {
    if (show) {
        _PreLoaderWaitCount++;
        setTimeout(() => {
            if (_PreLoaderWaitCount > 0) {
                document.getElementById(_WNPreLoderId)?.classList.remove('hide');
            }
        }, _WNPreLoaderDelayStart);

        wnStopPreLoaderTimeout();

        if (_WNPreLoaderTimeout != 0) {
            _WNPreLoaderTimeoutTimer = setTimeout(() => {
                _PreLoaderWaitCount = 0;
                wnShowPreLoader(false, _WNPreLoderId, _WNPreLoaderDelayStart = WNPreLoaderDelayStart)
            }, _WNPreLoaderTimeout)
        }
    }
    else {
        _PreLoaderWaitCount--;
        if (_PreLoaderWaitCount <= 0) {
            document.getElementById(_WNPreLoderId)?.classList.add('hide');
            _PreLoaderWaitCount = 0;
            wnStopPreLoaderTimeout();
        }
    }
}

function wnHideAllPreLoader(_WNPreLoderId: string = WNPreLoderId){
    wnStopPreLoaderTimeout();
    _PreLoaderWaitCount = 0;
    document.getElementById(_WNPreLoderId)?.classList.add('hide');
}