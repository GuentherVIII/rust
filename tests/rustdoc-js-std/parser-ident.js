const PARSED = [
    {
        query: "R<!>",
        elems: [{
            name: "r",
            fullPath: ["r"],
            pathWithoutLast: [],
            pathLast: "r",
            generics: [
                {
                    name: "!",
                    fullPath: ["!"],
                    pathWithoutLast: [],
                    pathLast: "!",
                    generics: [],
                },
            ],
            typeFilter: -1,
        }],
        foundElems: 1,
        original: "R<!>",
        returned: [],
        userQuery: "r<!>",
        error: null,
    },
    {
        query: "!",
        elems: [{
            name: "!",
            fullPath: ["!"],
            pathWithoutLast: [],
            pathLast: "!",
            generics: [],
            typeFilter: -1,
        }],
        foundElems: 1,
        original: "!",
        returned: [],
        userQuery: "!",
        error: null,
    },
    {
        query: "a!",
        elems: [{
            name: "a",
            fullPath: ["a"],
            pathWithoutLast: [],
            pathLast: "a",
            generics: [],
            typeFilter: 14,
        }],
        foundElems: 1,
        original: "a!",
        returned: [],
        userQuery: "a!",
        error: null,
    },
    {
        query: "a!::b",
        elems: [],
        foundElems: 0,
        original: "a!::b",
        returned: [],
        userQuery: "a!::b",
        error: "Cannot have associated items in macros",
    },
    {
        query: "!::b",
        elems: [{
            name: "!::b",
            fullPath: ["!", "b"],
            pathWithoutLast: ["!"],
            pathLast: "b",
            generics: [],
            typeFilter: -1,
        }],
        foundElems: 1,
        original: "!::b",
        returned: [],
        userQuery: "!::b",
        error: null,
    },
    {
        query: "a!::b!",
        elems: [],
        foundElems: 0,
        original: "a!::b!",
        returned: [],
        userQuery: "a!::b!",
        error: "Cannot have associated items in macros",
    },
];
