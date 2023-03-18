var PreLoaderDelayStart= 500;
var PreLoaderTimeout= 30000;
var PreLoderId= 'preloader';
var _PreLoaderWaitCount= 0;
var _PreLoaderTimeoutTimer: any;
function ShowPreLoader(show: boolean, _PreLoderId = PreLoderId, _PreLoaderDelayStart = PreLoaderDelayStart, _PreLoaderTimeout = PreLoaderTimeout) {
    if (show) {
        _PreLoaderWaitCount++;
        setTimeout(() => {
            if (_PreLoaderWaitCount > 0) {
                document.getElementById(_PreLoderId)?.classList.remove('hide');
            }
        }, _PreLoaderDelayStart);
        if (_PreLoaderTimeoutTimer != 0) {
            clearTimeout(_PreLoaderTimeoutTimer);
            _PreLoaderTimeoutTimer = 0;
        }
        _PreLoaderTimeoutTimer = setTimeout(() => {
            _PreLoaderWaitCount = 0;
            ShowPreLoader(false, _PreLoderId , _PreLoaderDelayStart = PreLoaderDelayStart)
        }, _PreLoaderTimeout)
    }
    else {
        _PreLoaderWaitCount--;
        if (_PreLoaderWaitCount <= 0) {
            document.getElementById(_PreLoderId)?.classList.add('hide');
            _PreLoaderWaitCount = 0;
            if (_PreLoaderTimeoutTimer != 0) {
                clearTimeout(_PreLoaderTimeoutTimer);
                _PreLoaderTimeoutTimer = 0;
            }
        }
    }
}