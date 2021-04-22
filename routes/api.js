const router = require("express").Router();
const db = require("../models");

//need to get aggregate method working with workout(addfields and sum operator)
router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
})

// router.get("/api/workouts", (req, res) => {
//     db.Workout.find().then(dbWorkout => res.json(dbWorkout))
//     .catch(err => {
//         res.status(400).json(err);
//     });
// });


//need to get aggregate method working with workout(addfields and sum operator)
router.get("/api/workouts/range", ({}, res) => {
    db.Workout.find({}).then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

// router.post("/api/workouts", (req, res) => {
//     db.Workout.create().then((dbWorkout) => {
//         res.json(dbWorkout);
//     }).catch(err => {
//         res.status(400).json(err);
//     });
// });

// router.post("/api/workouts", (req, res) => {
//     db.Workout.create({
//         day: Date.now()
//     })
//     then(newWorkout => {
//         console.log("Hello I am a new workout: ", newWorkout);
//         res.json(newWorkout);
//     })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });
router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body).then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});


router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
        req.params.id,
        { $push: { exercises: req.body } },
        { new: true }
    )
        .then(dbWorkout => res.json(dbWorkout))
        .catch(err => {
            res.status(404).json(err);
        });
    });
//         { _id: req.params.id }, { exercises: req.body }
//     )
//         .then((dbWorkout) => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

module.exports = router;
