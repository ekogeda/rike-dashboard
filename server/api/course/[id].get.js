export default defineEventHandler((event) => {
  //get a course by id

  // const data = {
  const courses = [
    {
      id: 1,
      heading: 'Module 1',
      title: 'GSA Module 1',
      subtitle: 'Course overview & guiding principle',
      estimated_time: '1 Hour',
      started: 'Feb 19, 2023',
      completed: 'Feb 19, 2023',
      interactive_time: 30,
      score: 88,
      img: 'assets/road.svg',
      assignment: [
        {
          completed: false,
          icon: 'mdi-lightbulb-variant-outline',
          task_number: 1.1,
          task_title: 'Create your first venture',
          task_subtitle: 'It\'s time to load your first venture into the Platform. It\'s super easy to do.',
          task_subtitle_complete: '',
          task_paragraphs: [],
          task_info: [],
          task_lists: [
            '<strong>Click into the <span class="text-green font-weight-bold">Ventures</span></strong> area.',
            '<strong>Click the "+" button</strong> beside the word "My Ventures" to add the name and description for the startup venture you will be working on as part of this program. The description you add here is meant to be 20 words or less.',
            'Now, you can also <strong>add Team Members</strong> like other <strong>Founders, Collaborators </strong> or <strong>Advisors.</strong> <br /> Founders must be part of the Empowered Startups Platform whereas Collaborators or Advisors can be outside the Platform.'
          ],
          task_list_complete: [],
          messages: [],
          task_note: 'You will also see the "Sample Venture" pre-loaded into your <span class="text-green font-weight-bold">Ventures</span> area. This is there solely as an',
        }
      ],
      menu: [
        {
          id: 1,
          title: "Chapter 1: Course Introduction",
          courseItems: [
            {
              id: 1,
              has_question: false,
              total_question: 0,
              subtitle: "Management",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
            },
            {
              id: 2,
              has_question: false,
              total_question: 0,
              subtitle: "Settings",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
            },
          ],
        },
        {
          id: 2,
          title: "Chapter 2: Learning goals",
          courseItems: [
            {
              id: 1,
              has_question: false,
              total_question: 0,
              subtitle: "Leaning goals",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
            },
            {
              id: 2,
              has_question: false,
              total_question: 0,
              subtitle: "How great leaders inspire actions",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
            },
          ],
        },
        {
          id: 3,
          title: "Chapter 3: Guiding principles",
          courseItems: [
            {
              id: 1,
              has_question: false,
              total_question: 0,
              subtitle: "Guiding principles",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
            },
          ],
        },
        {
          id: 4,
          title: "Knowledge check",
          courseItems: [
            {
              id: 1,
              has_question: false,
              total_question: 0,
              subtitle: "Word review",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
            },
            {
              id: 2,
              has_question: false,
              total_question: 0,
              subtitle: "Instructions",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "You may take this knowledge check multiple times until you receive a passing grade. After receiving a passing grade, the module will bne marked as complete and you may return to the course menu page to download, complete and submit your assignments.Each module's assignments will remain in your assignment folder at the end of each module and will be reviewed and commented on by an Empowered Startups Mentors.You can review these comments by revisiting your assignments folder at a later time.",
                "Each attempt at the knowledge check must be completed in a single sitting; if you close the window before submitting your responses, you will have to start over.",
                "The final review contains 7 questions.",
                "The passing mark is 70%.",
                "Click \"Knowledge Check\" on the left menu to begin the quiz.",
                // "Click \"Continue\" to begin the quiz.",
              ],
            },
            {
              id: 3,
              has_question: true,
              total_question: 7,
              subtitle: "Knowledge check | ",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
              questionnaire: [
                {
                  id: 1,
                  question: "This course focuses on ideation stage of learn startup methodology; during this stage your primary focus is on:",
                  options: [
                    {
                      key: "A",
                      val: "Validating your problem/solution fit",
                      ans: true
                    },
                    {
                      key: "B",
                      val: "Marketing and sales",
                      ans: false
                    },
                    {
                      key: "C",
                      val: "Product/market fit",
                      ans: false
                    },
                    {
                      key: "D",
                      val: "Scaling and growth",
                      ans: false
                    }
                  ]
                },
                {
                  id: 2,
                  question: "The lean canvas model is more valuable than a traditional business plan because:",
                  options: [
                    {
                      key: "A",
                      val: "It allows you to record your business idea quickly, and to easily iterate, update and make changes",
                      ans: false
                    },
                    {
                      key: "B",
                      val: "It is a longer document and takes more time to write",
                      ans: false
                    },
                    {
                      key: "C",
                      val: "It is static and rigid, so it keeps you attached to your original plan",
                      ans: true
                    },
                    {
                      key: "D",
                      val: "All of the above",
                      ans: false
                    }
                  ]
                },
                {
                  id: 3,
                  question: "In order to successfully complete this course, you must",
                  options: [
                    {
                      key: "A",
                      val: "Complete all modules",
                      ans: false
                    },
                    {
                      key: "B",
                      val: "Engage in 2 mentor interactions",
                      ans: false
                    },
                    {
                      key: "C",
                      val: "Complete all course assignments",
                      ans: false
                    },
                    {
                      key: "D",
                      val: "All of the above",
                      ans: true
                    }
                  ]
                },
                {
                  id: 4,
                  question: "Key actions that help to de-risk startup in the early stages include:",
                  options: [
                    {
                      key: "A",
                      val: "Making a decision about what customers need",
                      ans: false
                    },
                    {
                      key: "B",
                      val: "Always staying with your original idea",
                      ans: false
                    },
                    {
                      key: "C",
                      val: "Getting outside the building, having conversations and quick experimentation",
                      ans: true
                    },
                    {
                      key: "D",
                      val: "None of the above",
                      ans: false
                    }
                  ]
                },
                {
                  id: 5,
                  question: "In then early stages of startups, many of our thoughts and ideas are:",
                  options: [
                    {
                      key: "A",
                      val: "Likely to be truth",
                      ans: false
                    },
                    {
                      key: "B",
                      val: "Assumptions that have not been proven by research",
                      ans: true
                    },
                    {
                      key: "C",
                      val: "Always false",
                      ans: false
                    },
                    {
                      key: "D",
                      val: "None of the above",
                      ans: false
                    }
                  ]
                },
                {
                  id: 6,
                  question: "A common link between science and startup methodology is that they both:",
                  options: [
                    {
                      key: "A",
                      val: "Require experimentation to discover the appropriate solution",
                      ans: true
                    },
                    {
                      key: "B",
                      val: "Require that you wear a white lap coat",
                      ans: false
                    },
                    {
                      key: "C",
                      val: "Require you assume your solution is correct and move forward immediately",
                      ans: false
                    },
                    {
                      key: "D",
                      val: "Must be completed in a lab",
                      ans: false
                    }
                  ]
                },
                {
                  id: 7,
                  question: "It is more important that you love the __________",
                  options: [
                    {
                      key: "A",
                      val: "Problem you are solving",
                      ans: true
                    },
                    {
                      key: "B",
                      val: "Solution you are providing",
                      ans: false
                    }
                  ]
                }
              ],
            },
          ],
        },
        {
          id: 5,
          title: "Conclusion",
          courseItems: [
            {
              id: 1,
              has_question: false,
              total_question: 0,
              subtitle: "Conclusion",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: 'assets/done.svg',
              text: [
                "This concludes Module 1. You should now understand how the course and assignments are structured, what the course learning goals include and the three guiding principles to our Lean Startup Framework",
                "You can use the menu button at the top left of the screen to review the course material if desired",
                "Click the \"Save & Exit\" button below to return to the \"Training\" section where you will be prompted to complete your module assignments. You will be directed to documents found in the \"Ventures\" and \"Resources\" sections if then platform in order to complete your assignments."
              ],
            },
          ],
        },
      ]
    },
    {
      id: 2,
      heading: 'Module 2',
      title: 'GSA Module 2',
      subtitle: 'Build a business model',
      estimated_time: '2 Hour',
      started: 'Feb 21, 2023',
      completed: 'Feb 21, 2023',
      interactive_time: 45,
      score: 65,
      img: 'assets/model.svg',
      assignment: [
        {
          completed: true,
          icon: 'mdi-lightbulb-variant-outline',
          task_number: 2.1,
          task_title: 'Create your first lean canvas',
          task_subtitle: '',
          task_subtitle_complete: 'Now that you\'ve completed your Module 2 lesson, you\'re ready for your next task:',
          task_paragraphs: [],
          task_info: [],
          task_lists: [
            '<strong>Click into the <span class="text-green font-weight-bold">Ventures</span></strong> area.',
            '<strong>Click the "+" button</strong> beside the word "My Ventures" to add the name and description for the startup venture you will be working on as part of this program. The description you add here is meant to be 20 words or less.',
            'Now, you can also <strong>add Team Members</strong> like other <strong>Founders, Collaborators </strong> or <strong>Advisors.</strong> <br /> Founders must be part of the Empowered Startups Platform whereas Collaborators or Advisors can be outside the Platform.'
          ],
          task_list_complete: [
            '<strong>Complete your Plan A Lean Canvas.</strong> The Canvas can be found in your venture you created in the previous module.',
          ],
          messages: [],
          task_note: '(If you were following along with the lesson and the prompts, you likely have already completed this task.)',
        },
        {
          completed: true,
          icon: 'mdi-account-multiple-outline',
          task_number: 2.2,
          task_title: 'Mentor Touchpoint',
          task_subtitle: '',
          task_subtitle_complete: '',
          task_paragraphs: [
            'At this stage in the course, you are required to meet your mentor. Use the following link from your mentor to select a day/time that works best to schedule a mentor touch pont.',
            'Please schedule your mentor touchpoint with a minimum of 72 hours of notice. This provides your mentor with ample time to review your work. You will receive a confirmation email from your mentor no later than 48 hours after booking your session.',
          ],
          task_info: [],
          task_lists: [],
          task_list_complete: [],
          messages: [
            {
              avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
              initial: 'SA',
              excerpt: 'Set your mentor appointment with Shafi Akinropo Mentor 1',
              url: '/training',
              color: 'green',
            }
          ],
          task_note: '',
        }
      ],
      menu: [
        {
          id: 1,
          title: "Chapter 1: Introducing the lean canvas",
          courseItems: [
            {
              id: 1,
              has_question: false,
              total_question: 0,
              subtitle: "Introduction",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
            },
            {
              id: 2,
              has_question: false,
              total_question: 0,
              subtitle: "Settings",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
            },
          ],
        },
        {
          id: 2,
          title: "Chapter 2: Building your lean canvas - problems & customers",
          courseItems: [
            {
              id: 1,
              has_question: false,
              total_question: 0,
              subtitle: "Introduction",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
            },
          ],
        },
        {
          id: 3,
          title: "Chapter 3: Building your lean canvas - unique value proposition, solution and channels",
          courseItems: [
            {
              id: 1,
              has_question: false,
              total_question: 0,
              subtitle: "Introduction",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
            },
          ],
        },
        {
          id: 4,
          title: "Chapter 4: Building your lean canvas - revenue, streams & cost structure",
          courseItems: [
            {
              id: 1,
              has_question: false,
              total_question: 0,
              subtitle: "Introduction",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
            },
            {
              id: 2,
              has_question: false,
              total_question: 0,
              subtitle: "The revenue streams section",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
            },
            {
              id: 3,
              has_question: false,
              total_question: 0,
              subtitle: "The cost structure section",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
            },
          ],
        },
        {
          id: 5,
          title: "Chapter 5: Building your lean canvas - key metrics and unfair advantage",
          courseItems: [
            {
              id: 1,
              has_question: false,
              total_question: 0,
              subtitle: "Introduction",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
            },
            {
              id: 2,
              has_question: false,
              total_question: 0,
              subtitle: "Key metrics section",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
            },
            {
              id: 3,
              has_question: false,
              total_question: 0,
              subtitle: "The unfair advantage section",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
            },
            {
              id: 4,
              has_question: false,
              total_question: 0,
              subtitle: "Lean canvas complete",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
            },
          ],
        },
        {
          id: 6,
          title: "Knowledge check",
          courseItems: [
            {
              id: 1,
              has_question: false,
              total_question: 0,
              subtitle: "Word review",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
            },
            {
              id: 2,
              has_question: false,
              total_question: 0,
              subtitle: "Instructions",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "You may take this knowledge check multiple times until you receive a passing grade. After receiving a passing grade, the module will bne marked as complete and you may return to the course menu page to download, complete and submit your assignments.Each module's assignments will remain in your assignment folder at the end of each module and will be reviewed and commented on by an Empowered Startups Mentors.You can review these comments by revisiting your assignments folder at a later time.",
                "Each attempt at the knowledge check must be completed in a single sitting; if you close the window before submitting your responses, you will have to start over.",
                "The final review contains 7 questions.",
                "The passing mark is 70%.",
                "Click \"Knowledge Check\" on the left menu to begin the quiz.",
                // "Click \"Continue\" to begin the quiz.",
              ],
            },
            {
              id: 3,
              has_question: true,
              total_question: 7,
              subtitle: "Knowledge check | ",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
              questionnaire: [
                {
                  id: 1,
                  question: "This course focuses on ideation stage of learn startup methodology; during this stage your primary focus is on:",
                  options: [
                    {
                      key: "A",
                      val: "Validating your problem/solution fit",
                      ans: true
                    },
                    {
                      key: "B",
                      val: "Marketing and sales",
                      ans: false
                    },
                    {
                      key: "C",
                      val: "Product/market fit",
                      ans: false
                    },
                    {
                      key: "D",
                      val: "Scaling and growth",
                      ans: false
                    }
                  ]
                },
                {
                  id: 2,
                  question: "The lean canvas model is more valuable than a traditional business plan because:",
                  options: [
                    {
                      key: "A",
                      val: "It allows you to record your business idea quickly, and to easily iterate, update and make changes",
                      ans: false
                    },
                    {
                      key: "B",
                      val: "It is a longer document and takes more time to write",
                      ans: false
                    },
                    {
                      key: "C",
                      val: "It is static and rigid, so it keeps you attached to your original plan",
                      ans: true
                    },
                    {
                      key: "D",
                      val: "All of the above",
                      ans: false
                    }
                  ]
                },
                {
                  id: 3,
                  question: "In order to successfully complete this course, you must",
                  options: [
                    {
                      key: "A",
                      val: "Complete all modules",
                      ans: false
                    },
                    {
                      key: "B",
                      val: "Engage in 2 mentor interactions",
                      ans: false
                    },
                    {
                      key: "C",
                      val: "Complete all course assignments",
                      ans: false
                    },
                    {
                      key: "D",
                      val: "All of the above",
                      ans: true
                    }
                  ]
                },
                {
                  id: 4,
                  question: "Key actions that help to de-risk startup in the early stages include:",
                  options: [
                    {
                      key: "A",
                      val: "Making a decision about what customers need",
                      ans: false
                    },
                    {
                      key: "B",
                      val: "Always staying with your original idea",
                      ans: false
                    },
                    {
                      key: "C",
                      val: "Getting outside the building, having conversations and quick experimentation",
                      ans: true
                    },
                    {
                      key: "D",
                      val: "None of the above",
                      ans: false
                    }
                  ]
                },
                {
                  id: 5,
                  question: "In then early stages of startups, many of our thoughts and ideas are:",
                  options: [
                    {
                      key: "A",
                      val: "Likely to be truth",
                      ans: false
                    },
                    {
                      key: "B",
                      val: "Assumptions that have not been proven by research",
                      ans: true
                    },
                    {
                      key: "C",
                      val: "Always false",
                      ans: false
                    },
                    {
                      key: "D",
                      val: "None of the above",
                      ans: false
                    }
                  ]
                },
                {
                  id: 6,
                  question: "A common link between science and startup methodology is that they both:",
                  options: [
                    {
                      key: "A",
                      val: "Require experimentation to discover the appropriate solution",
                      ans: true
                    },
                    {
                      key: "B",
                      val: "Require that you wear a white lap coat",
                      ans: false
                    },
                    {
                      key: "C",
                      val: "Require you assume your solution is correct and move forward immediately",
                      ans: false
                    },
                    {
                      key: "D",
                      val: "Must be completed in a lab",
                      ans: false
                    }
                  ]
                },
                {
                  id: 7,
                  question: "It is more important that you love the __________",
                  options: [
                    {
                      key: "A",
                      val: "Problem you are solving",
                      ans: true
                    },
                    {
                      key: "B",
                      val: "Solution you are providing",
                      ans: false
                    }
                  ]
                }
              ],
            },
          ],
        },
        {
          id: 7,
          title: "Conclusion",
          courseItems: [
            {
              id: 1,
              has_question: false,
              total_question: 0,
              subtitle: "Conclusion",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
            },
          ],
        },
      ]
    },
    {
      id: 3,
      heading: 'Module 3',
      title: 'GSA Module 3',
      subtitle: 'Business archetypes & traction modeling',
      estimated_time: '2 Hour',
      started: 'Feb 22, 2023',
      completed: 'Feb 22, 2023',
      interactive_time: 30,
      score: 77,
      img: 'assets/work.svg',
      assignment: [
        {
          completed: false,
          icon: 'mdi-lightbulb-variant-outline',
          task_number: 3.1,
          task_title: '',
          task_subtitle: '',
          task_subtitle_complete: '',
          task_paragraphs: [],
          task_info: [],
          task_lists: [],
          task_list_complete: [],
          messages: [],
          task_note: '',
        }
      ],
      menu: [
        {
          id: 1,
          title: "Chapter 1: Course Introduction",
          courseItems: [
            {
              id: 1,
              has_question: false,
              total_question: 0,
              subtitle: "Coming soon",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
            },
          ],
        },
      ]
    },
    {
      id: 4,
      heading: 'Module 4',
      title: 'GSA Module 4A',
      subtitle: 'Validate the problem - customer problem interview',
      estimated_time: '4 Hour',
      started: 'Feb 23, 2023',
      completed: 'Feb 23, 2023',
      interactive_time: 30,
      score: 50,
      img: 'assets/conversation.svg',
      assignment: [
        {
          completed: true,
          icon: 'mdi-lightbulb-variant-outline',
          task_number: '4A.1',
          task_title: 'Write your problem experiment plan & script',
          task_subtitle: '',
          task_subtitle_complete: '',
          task_paragraphs: [
            'Within your venture, it is time to write your Problem <strong>Experiment Plan</strong> and the <strong>Interview Script</strong>. You will do this in your Ventures area.',
            'If you need more explanation or examples, you can also <strong>take a look at the Sample Venture\'s</strong> Experiment Plan',
          ],
          task_info: [],
          task_lists: [],
          task_list_complete: [],
          messages: [],
          task_note: '',
        },
        {
          completed: true,
          icon: 'mdi-account-multiple-outline',
          task_number: '4A.2',
          task_title: 'Mentor Touchpoint',
          task_subtitle: '',
          task_subtitle_complete: '',
          task_paragraphs: [
            'At this stage in the course, you are required to meet your mentor. Use the following link from your mentor to select a day/time that works best to schedule a mentor touch pont.',
            'Please schedule your mentor touchpoint with a minimum of 72 hours of notice. This provides your mentor with ample time to review your work. You will receive a confirmation email from your mentor no later than 48 hours after booking your session.',
          ],
          task_info: [],
          task_lists: [],
          task_list_complete: [],
          messages: [
            {
              avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
              initial: 'SA',
              excerpt: 'Set your mentor appointment with Shafi Akinropo Mentor 1',
              url: '/training',
              color: 'green',
            }
          ],
          task_note: '',
        }
      ],
      menu: [
        {
          id: 1,
          title: "Chapter 1: Course Introduction",
          courseItems: [
            {
              id: 1,
              has_question: false,
              total_question: 0,
              subtitle: "Coming soon",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
            },
          ],
        },
      ]
    },
    {
      id: 5,
      heading: 'Module 4',
      title: 'GSA Module 4B',
      subtitle: 'Validate the problem - customer problem interview',
      estimated_time: '10 Days',
      started: 'Feb 24, 2023',
      completed: 'Feb 24, 2023',
      interactive_time: 30,
      score: 100,
      img: 'assets/conversation-2.svg',
      assignment: [
        {
          completed: true,
          icon: 'mdi-lightbulb-variant-outline',
          task_number: '4B.1',
          task_title: 'Conduct your interviews',
          task_subtitle: '',
          task_subtitle_complete: '',
          task_paragraphs: [
            'You are now ready to begin your interviews and document your learning. As the learning shows, you capture your interview\'s names and general information in the <strong>Validation Interview</strong> tab.',
          ],
          task_info: [
            {
              id: 1,
              text: 'You can capture evidence from those interviews from the Canvas found in your Ventures area.',
              instruction: [
                'The Happy Face is evidence that supports your assumptions.',
                'The Neutral Face is evidence that neither supports or rejects your assumptions.',
                'The Sad Face is evidence that rejects your assumptions.',
              ],
            },
            {
              id: 2,
              text: 'Here are what you need to cover in this tasks:',
              instruction: [
                'Carry out a minimum of 10 Customer interviews.',
                'Document your learning from each interviews in the <strong>Validation Interview</strong> tab attached to your Plan A Canvas.',
                'Attach the evidence from your interviews to your canvas. It might be easier to do this step immediately after the interview so you\'re not rushed.',
              ],
            }
          ],
          task_lists: [],
          task_list_complete: [],
          messages: [],
          task_note: '',
        },
        {
          completed: true,
          icon: 'mdi-lightbulb-variant-outline',
          task_number: '4B.2',
          task_title: 'Write your experiment report',
          task_subtitle: '',
          task_subtitle_complete: '',
          task_paragraphs: [
            'With your interviews completed and evidence attached to your cards, you\'ve learned much about your audiences and how well your venture solves a business problem. It\'s time to write a summary of your interviews in your <strong>Experiment Report</strong> found in your venture. This report is a time to reflect deeply about your venture, your assumptions, key learnings, and next step to improve your venture.',
          ],
          task_info: [
            {
              id: 2,
              text: 'Your task:',
              instruction: [
                'Complete an Experiment Report.',
              ],
            },
          ],
          task_lists: [],
          task_list_complete: [],
          messages: [],
          task_note: '',
        },
        {
          completed: true,
          icon: 'mdi-lightbulb-variant-outline',
          task_number: '4B.3',
          task_title: 'Create your plan B',
          task_subtitle: '',
          task_subtitle_complete: '',
          task_paragraphs: [
            'Now you\'re ready to determine what assumptions on your canvas have been validated and become your Lean Canvas, Plan B. This is done in your venture.',
          ],
          task_info: [
            {
              id: 1,
              text: '',
              instruction: [
                'Roll over invalidated card. <strong>click the Thumbs Down icon.</strong> That will put a line through the assumption.',
                'When you have Thumbs Down all invalidated all cards, <strong>go to the Canvas tools dropdown (beside Print icon) and select Plan B.</strong>',
                'Plan B\'s Canvas will be empty. Now, <strong>select Copy Previous Canvas.</strong>',
              ],
            },
          ],
          task_lists: [],
          task_list_complete: [],
          messages: [],
          task_note: 'Plan A\s validated assumptions will be copied into Plan B. Invalidated cards are left behind in Plan A. <br />Great work!',
        },
        {
          completed: true,
          icon: 'mdi-lightbulb-variant-outline',
          task_number: '4B.4',
          task_title: 'Investigate and write competitor profiles',
          task_subtitle: '',
          task_subtitle_complete: '',
          task_paragraphs: [
            'It is important that you know about your competitors. Your task to complete this module is to learn about and document your competitors. The Competitor Profile tab has the relevant fields for you to fill out and is found in your venture.',
          ],
          task_info: [
            {
              id: 2,
              text: '',
              instruction: [
                'Complete the Competitor Profile form.',
              ],
            },
          ],
          task_lists: [],
          task_list_complete: [],
          messages: [],
          task_note: 'Plan A\s validated assumptions will be copied into Plan B. Invalidated cards are left behind in Plan A. <br />Great work!',
        }
      ],
      menu: [
        {
          id: 1,
          title: "Chapter 1: Course Introduction",
          courseItems: [
            {
              id: 1,
              has_question: false,
              total_question: 0,
              subtitle: "Coming soon",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
            },
          ],
        },
      ]
    },
    {
      id: 6,
      heading: 'Module 5',
      title: 'GSA Module 5',
      subtitle: 'Validate your solution - customer solution interview',
      estimated_time: '6 days',
      started: 'Mar 21, 2023',
      completed: 'Mar 21, 2023',
      interactive_time: 30,
      score: 77,
      img: 'assets/search.svg',
      assignment: [
        {
          completed: true,
          icon: 'mdi-lightbulb-variant-outline',
          task_number: 5.1,
          task_title: 'Write your solution experiment plan',
          task_subtitle: '',
          task_subtitle_complete: '',
          task_paragraphs: [
            'You\'re ready to <strong>complete your Plan B and your Solution Experiment Plan</strong> that will help you identify exactly what assumptions and learning you are exploring in the next set of interviews. Both of these tasks can be completed in your venture.',
            'If you need help doing an initial version of your Solution Validation Plan, you can <strong>review the Sample Venture\'s Plan B, Experiment Plan</strong> for reference.',
          ],
          task_info: [],
          task_lists: [
            '<strong>Click into the <span class="text-green font-weight-bold">Ventures</span></strong> area.',
            '<strong>Click the "+" button</strong> beside the word "My Ventures" to add the name and description for the startup venture you will be working on as part of this program. The description you add here is meant to be 20 words or less.',
            'Now, you can also <strong>add Team Members</strong> like other <strong>Founders, Collaborators </strong> or <strong>Advisors.</strong> <br /> Founders must be part of the Empowered Startups Platform whereas Collaborators or Advisors can be outside the Platform.'
          ],
          task_list_complete: [
            '<strong>Complete your Plan A Lean Canvas.</strong> The Canvas can be found in your venture you created in the previous module.',
          ],
          messages: [],
          task_note: '(If you were following along with the lesson and the prompts, you likely have already completed this task.)',
        },
        {
          completed: true,
          icon: 'mdi-account-multiple-outline',
          task_number: 5.2,
          task_title: 'Build a Demo/Prototype',
          task_subtitle: '',
          task_subtitle_complete: '',
          task_paragraphs: [
            'As you saw in the lesson, demos can be sketches, wireframes, screenshots, and computer-generated models that show how your solution solves the problem. The demo should also be easy to update and inexpensive so you can iterate many times if needed.',
          ],
          task_info: [
            {
              id: 2,
              text: '',
              instruction: [
                '<strong>Build a demo or a "minimum unviable product"</strong> to show during your interviews',
                '<strong>Upload</strong> the PDF, JPG or PNG file(s) to the <strong>Prototype</strong> tab in your venture.',
              ],
            },
          ],
          task_lists: [],
          task_list_complete: [],
          messages: [
            {
              avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
              initial: 'SA',
              excerpt: 'Set your mentor appointment with Shafi Akinropo Mentor 1',
              url: '/training',
              color: 'green',
            }
          ],
          task_note: '',
        },
        {
          completed: true,
          icon: 'mdi-lightbulb-variant-outline',
          task_number: 5.3,
          task_title: 'Write your solution interview script',
          task_subtitle: '',
          task_subtitle_complete: '',
          task_paragraphs: [
            'Complete your <strong>Solution Interview Script.</strong> The form for this can be found in your venture.',
          ],
          task_info: [],
          task_lists: [],
          task_list_complete: [],
          messages: [],
          task_note: '',
        },
        {
          completed: true,
          icon: 'mdi-lightbulb-variant-outline',
          task_number: 5.4,
          task_title: 'Conduct your solution interviews',
          task_subtitle: '',
          task_subtitle_complete: '',
          task_paragraphs: [
            'Like your Problem Interviews, you will now <strong>carry out interviews and document your learning </strong> in the <strong>Validation Interviews</strong> and  <strong>Canvas</strong> tabs found in your Venture area.',
          ],
          task_info: [
            {
              id: 2,
              text: 'The steps are:',
              instruction: [
                'Carry out a minimum of <strong>10 Customer Interviews.</strong>',
                '<strong>Document your leaning</strong> in the Validation Interviews tab attached to Plan B.',
                '<strong>Attach the evidence</strong> from your interviews to your canvas.',
              ],
            },
          ],
          task_lists: [],
          task_list_complete: [],
          messages: [],
          task_note: '',
        },
        {
          completed: true,
          icon: 'mdi-lightbulb-variant-outline',
          task_number: 5.5,
          task_title: 'Write your experiment report',
          task_subtitle: '',
          task_subtitle_complete: '',
          task_paragraphs: [
            'Again, with your Solution Interviews completed and evidence attached to your cards, you\'re ready to think deeply about your learnings and report about them.',
          ],
          task_info: [
            {
              id: 2,
              text: '',
              instruction: [
                '<strong>Complete an Experiment Report</strong> found in your venture.',
              ],
            },
          ],
          task_lists: [],
          task_list_complete: [],
          messages: [],
          task_note: '',
        },
        {
          completed: true,
          icon: 'mdi-lightbulb-variant-outline',
          task_number: 5.6,
          task_title: 'Create your plan c',
          task_subtitle: '',
          task_subtitle_complete: '',
          task_paragraphs: [
            'Once you have attached your evidence to your Plan B Canvas, you again choose to thumbs down particular assumptions that have been disproven. What remains validated, becomes your Plan C. <br />This is all done in your venture.',
          ],
          task_info: [
            {
              id: 2,
              text: '',
              instruction: [
                'First <strong>invalidate disproven assumptions</strong> by clicking their thumbs down icon to add a strike through.',
                'When you have stuck out all disproven assumptions, go to the Canvas tool dropdown (beside the Print icon) and select Plan C',
                'Plan C\'s Canvas will be empty. Now, select Copy Previous Canvas.'
              ],
            },
          ],
          task_lists: [],
          task_list_complete: [],
          messages: [],
          task_note: 'Plan B\'s validated assumptions will be copied into Plan C.',
        },
      ],
      menu: [
        {
          id: 1,
          title: "Chapter 1: Course Introduction",
          courseItems: [
            {
              id: 1,
              has_question: false,
              total_question: 0,
              subtitle: "Coming soon",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
            },
          ],
        },
      ]
    },
    {
      id: 7,
      heading: 'Module 6',
      title: 'GSA Module 6',
      subtitle: 'Venture report, pitch & program summary',
      estimated_time: '7 days',
      started: 'Mar 26, 2023',
      completed: 'Mar 26, 2023',
      interactive_time: 30,
      score: 100,
      img: 'assets/chart.svg',
      assignment: [
        {
          completed: true,
          icon: 'mdi-lightbulb-variant-outline',
          task_number: 6.1,
          task_title: 'Write your venture report / executive summary',
          task_subtitle: '',
          task_subtitle_complete: '',
          task_paragraphs: [
            'Now it is time to write a Venture Report for your business.',
          ],
          task_info: [],
          task_lists: [],
          task_list_complete: [],
          messages: [],
          task_note: '',
        },
        {
          completed: true,
          icon: 'mdi-lightbulb-variant-outline',
          task_number: 6.2,
          task_title: 'Mentor touchpoint',
          task_subtitle: '',
          task_subtitle_complete: '',
          task_paragraphs: [
            'At this final stage in the course, you and your mentor should review you Venture Report and/or Pitch Deck. Use the following link from your mentor to select a day/time that works best to schedule a mentor touch point.',
            'Please schedule your mentor touch point with a minimum of 72 hours of notice. This provides your mentor with ample time to review your work. You will receive a confirmation email from your mentor no later than 48 hours after booking your session',
          ],
          task_info: [],
          task_lists: [],
          task_list_complete: [],
          messages: [
            {
              avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
              initial: 'SA',
              excerpt: 'Set your mentor appointment with Shafi Akinropo Mentor 1',
              url: '/training',
              color: 'green',
            }
          ],
          task_note: '',
        },
        {
          completed: true,
          icon: 'mdi-lightbulb-variant-outline',
          task_number: 6.3,
          task_title: 'Build a pitch deck',
          task_subtitle: '',
          task_subtitle_complete: '',
          task_paragraphs: [
            'As discussed in your lesson, a pitch deck will bring all your information together for presentation to interested customers, investors amd collaborators.',
            'You can use a variety of software programs like PowerPoint, Google Slides, Keynote and others.',
          ],
          task_info: [
            {
              id: 2,
              text: '',
              instruction: [
                '<strong>Create a pitch deck</strong>',
                '<strong>Upload pitch deck to My Documents</strong> found in the Venture area',
              ],
            },
          ],
          task_lists: [],
          task_list_complete: [],
          messages: [],
          task_note: '<strong>Note:</strong> If you create your pitch deck in a grogram that we don\'t support, please print as a PDF and upload.',
        },
        {
          completed: true,
          icon: 'mdi-lightbulb-variant-outline',
          task_number: 6.4,
          task_title: 'Add certificate to your linkedIn profile',
          task_subtitle: '',
          task_subtitle_complete: '',
          task_paragraphs: [
            'Congratulations on completing the training and becoming certified by Empowered Startups. Now it\'s time tp share your accomplishment with your business network on LinkedIn',
            'It\'s easy to share! Under the <strong>Licenses & Certifications</strong> section of your LinkedIn profile, you can add your certificate by entering the information as shown in the example below.',
          ],
          task_info: [],
          task_lists: [],
          task_list_complete: [],
          messages: [],
          task_note: 'Click this button to get started.',
        },
      ],
      menu: [
        {
          id: 1,
          title: "Chapter 1: Course Introduction",
          courseItems: [
            {
              id: 1,
              has_question: false,
              total_question: 0,
              subtitle: "Coming soon",
              icon_checked: "mdi-check-circle-outline",
              icon_cancel: "mdi-close-circle-outline",
              img: '',
              text: [
                "coming soon.",
              ],
            },
          ],
        },
      ]
    },
  ]

  const filtered = courses.filter((item) => {
    if (item.id == event.context.params.id) {
      return item
    }
  })

  return filtered

});