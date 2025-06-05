export const questions = [
    {
        question: "what's your name?",
        label: "name",
        name: "name",
        index: 0,
    },
    {
        question: "What's your age?",
        name: "age",
        type: "radio",
        index: 1,
        options: [
            {
                value: "Infants (<1 year)",
                prevalence: 37.3,
                source: "IJPediatrics, 2024"
            },
            {
                value: "Children (1–4 years)",
                prevalence: 20.0,
                source: "IJPediatrics, 2024"
            },
            {
                value: "Adolescents (12–19 years)",
                prevalence: 36.0,
                source: "IJPediatrics, 2024"
            },
            {
                value: "Adults (20–39 years)",
                prevalence: "<=3",
                source: "ScienceDirect, 2023"
            },
            {
                value: "Adults (40–59 years)",
                prevalence: "≈4",
                source: "ScienceDirect, 2023"
            },
            {
                value: "Adults (60+ years)",
                prevalence: "≈6",
                source: "ScienceDirect, 2023"
            }
        ]
    },
    {
        question: "Which best describes your usual diet?",
        name: "diet_type",
        type: "radio",
        index: 2,
        options: [
            { value: "Omnivore – I regularly eat meat, dairy, or eggs." },
            { value: "Vegetarian – I do not eat meat but do eat dairy and/or eggs." },
            { value: "Vegan – I do not eat any meat, dairy, or eggs." }
        ]
    },
    {
        question: "How often do you eat red meat (beef, pork, lamb)?",
        name: "red_meat_frequency",
        type: "radio",
        index: 3,
        options: [
            { value: "Daily or almost every day" },
            { value: "A few times a week" },
            { value: "Less than once a week" },
            { value: "Never" }
        ]
    },
    {
        question: "How often do you consume eggs or dairy (milk, cheese, yogurt)?",
        name: "dairy_egg_frequency",
        type: "radio",
        index: 4,
        options: [
            { value: "Daily or almost every day" },
            { value: "A few times a week" },
            { value: "Less than once a week" },
            { value: "Never" }
        ]
    },
    {
        question: "Do you regularly (several times per week) take acid-reducing medications?",
        name: "acid_reducing_meds",
        type: "radio",
        index: 5,
        options: [
            { value: "Yes" },
            { value: "No" }
        ]
    },
    {
        question: "Do you take the diabetes medication metformin?",
        name: "takes_metformin",
        type: "radio",
        index: 6,
        options: [
            { value: "Yes" },
            { value: "No" }
        ]
    },
    {
        question: "Have you been diagnosed with a digestive condition or had surgery that affects absorption?",
        name: "digestive_condition",
        type: "radio",
        index: 7,
        options: [
            { value: "Yes" },
            { value: "No" }
        ]
    },
    {
        question: "Do you regularly consume alcohol?",
        name: "regular_alcohol",
        type: "radio",
        index: 8,
        options: [
            { value: "Yes" },
            { value: "No" }
        ]
    }
];
