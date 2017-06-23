import Metrics from './Metrics'
import Colors from './Colors'

const girds = {
  horizontalCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  horizontalCenterStart: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  horizontalCenterEnd: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  horizontalCenterSb: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  horizontalCenterSa: {
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}

const girdsRow = {
  verticalCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  verticalCenterStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  verticalCenterEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  verticalCenterSb: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  verticalCenterSa: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}

const screen = {
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.primitiveColor.transparent
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  container: {
    flex: 1,
    paddingTop: Metrics.section,
    backgroundColor: Colors.primitiveColor.transparent
  }
}

export default {
  girds,
  girdsRow,
  screen
}
