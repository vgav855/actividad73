maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.motorStop(maqueen.Motors.M2)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorStop(maqueen.Motors.M1)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    }
})
