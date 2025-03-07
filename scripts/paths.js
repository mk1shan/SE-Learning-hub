const learningPaths = {
    'software-engineering': {
        title: 'Software Engineering',
        description: 'Master the fundamentals and advanced concepts of Software Engineering',
        sections: [
            {
                title: 'Programming Languages',
                resources: [
                    {
                        name: 'Python Programming',
                        url: 'language-template.html?lang=python',
                        type: 'language',
                        platform: 'Python',
                        isLanguage: true
                    },
                    {
                        name: 'JavaScript Development',
                        url: 'language-template.html?lang=javascript',
                        type: 'language',
                        platform: 'JavaScript',
                        isLanguage: true
                    },
                    {
                        name: 'Java Programming',
                        url: 'language-template.html?lang=java',
                        type: 'language',
                        platform: 'Java',
                        isLanguage: true
                    },
                    {
                        name: 'C++ Programming',
                        url: 'language-template.html?lang=cpp',
                        type: 'language',
                        platform: 'C++',
                        isLanguage: true
                    },
                    {
                        name: 'C# Development',
                        url: 'language-template.html?lang=csharp',
                        type: 'language',
                        platform: 'C#',
                        isLanguage: true
                    },
                    {
                        name: 'Ruby Programming',
                        url: 'language-template.html?lang=ruby',
                        type: 'language',
                        platform: 'Ruby',
                        isLanguage: true
                    },
                    {
                        name: 'PHP Development',
                        url: 'language-template.html?lang=php',
                        type: 'language',
                        platform: 'PHP',
                        isLanguage: true
                    }
                ]
            },
            {
                title: 'Programming Fundamentals',
                resources: [
                    {
                        name: 'Python Programming',
                        url: 'https://www.w3schools.com/python/',
                        type: 'tutorial',
                        platform: 'W3Schools'
                    },
                    {
                        name: 'Java Programming',
                        url: 'https://www.w3schools.com/java/',
                        type: 'tutorial',
                        platform: 'W3Schools'
                    },
                    {
                        name: 'Data Structures and Algorithms',
                        url: 'https://www.geeksforgeeks.org/data-structures/',
                        type: 'learning',
                        platform: 'GeeksforGeeks'
                    },
                    {
                        name: 'JavaScript Complete Guide',
                        url: 'https://javascript.info/',
                        type: 'tutorial',
                        platform: 'JavaScript.info'
                    },
                    {
                        name: 'C++ Programming',
                        url: 'https://www.learncpp.com/',
                        type: 'tutorial',
                        platform: 'LearnCpp'
                    },
                    {
                        name: 'Git Version Control',
                        url: 'https://www.atlassian.com/git/tutorials',
                        type: 'tutorial',
                        platform: 'Atlassian'
                    }
                ]
            },
            {
                title: 'Software Engineering Principles',
                resources: [
                    {
                        name: 'Design Patterns',
                        url: 'https://refactoring.guru/design-patterns',
                        type: 'documentation',
                        platform: 'Refactoring Guru'
                    },
                    {
                        name: 'Clean Code Principles',
                        url: 'https://www.youtube.com/watch?v=7EmboKQH8lM',
                        type: 'video',
                        platform: 'YouTube'
                    },
                    {
                        name: 'SOLID Principles',
                        url: 'https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design',
                        type: 'article',
                        platform: 'DigitalOcean'
                    },
                    {
                        name: 'System Design Primer',
                        url: 'https://github.com/donnemartin/system-design-primer',
                        type: 'documentation',
                        platform: 'GitHub'
                    }
                ]
            },
            {
                title: 'Web Development',
                resources: [
                    {
                        name: 'Full Stack Open',
                        url: 'https://fullstackopen.com/',
                        type: 'course',
                        platform: 'University of Helsinki'
                    },
                    {
                        name: 'React Documentation',
                        url: 'https://react.dev/',
                        type: 'documentation',
                        platform: 'React'
                    },
                    {
                        name: 'Node.js Learning',
                        url: 'https://nodejs.dev/learn',
                        type: 'tutorial',
                        platform: 'Node.js'
                    }
                ]
            },
            {
                title: 'Database Systems',
                resources: [
                    {
                        name: 'SQL Tutorial',
                        url: 'https://www.sqlzoo.net/',
                        type: 'interactive',
                        platform: 'SQLZoo'
                    },
                    {
                        name: 'MongoDB University',
                        url: 'https://university.mongodb.com/',
                        type: 'course',
                        platform: 'MongoDB'
                    },
                    {
                        name: 'Database Design',
                        url: 'https://www.postgresql.org/docs/current/tutorial.html',
                        type: 'documentation',
                        platform: 'PostgreSQL'
                    }
                ]
            },
            {
                title: 'Modern Development Practices',
                resources: [
                    {
                        name: 'Agile Development',
                        url: 'https://www.atlassian.com/agile',
                        type: 'guide',
                        platform: 'Atlassian'
                    },
                    {
                        name: 'Microservices Architecture',
                        url: 'https://microservices.io/',
                        type: 'documentation',
                        platform: 'microservices.io'
                    },
                    {
                        name: 'Domain-Driven Design',
                        url: 'https://martinfowler.com/bliki/DomainDrivenDesign.html',
                        type: 'article',
                        platform: 'Martin Fowler'
                    }
                ]
            },
            {
                title: 'Security Engineering',
                resources: [
                    {
                        name: 'OWASP Top 10',
                        url: 'https://owasp.org/www-project-top-ten/',
                        type: 'documentation',
                        platform: 'OWASP'
                    },
                    {
                        name: 'Web Security Academy',
                        url: 'https://portswigger.net/web-security',
                        type: 'course',
                        platform: 'PortSwigger'
                    },
                    {
                        name: 'Secure Coding Guidelines',
                        url: 'https://wiki.sei.cmu.edu/confluence/display/seccode',
                        type: 'documentation',
                        platform: 'SEI CERT'
                    }
                ]
            },
            {
                title: 'Software Architecture',
                resources: [
                    {
                        name: 'Clean Architecture',
                        url: 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html',
                        type: 'article',
                        platform: 'Clean Coder'
                    },
                    {
                        name: 'Software Architecture Patterns',
                        url: 'https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/',
                        type: 'book',
                        platform: "O'Reilly"
                    },
                    {
                        name: 'Architecture Decision Records',
                        url: 'https://adr.github.io/',
                        type: 'documentation',
                        platform: 'ADR'
                    }
                ]
            }
        ]
    },
    'cloud-computing': {
        title: 'Cloud Computing',
        description: 'Learn cloud platforms and DevOps practices',
        sections: [
            {
                title: 'Cloud Fundamentals',
                resources: [
                    {
                        name: 'AWS Basics',
                        url: 'https://aws.amazon.com/training/digital/',
                        type: 'course',
                        platform: 'AWS'
                    },
                    {
                        name: 'Azure Fundamentals',
                        url: 'https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/',
                        type: 'documentation',
                        platform: 'Microsoft'
                    },
                    {
                        name: 'Google Cloud Basics',
                        url: 'https://cloud.google.com/training',
                        type: 'course',
                        platform: 'Google Cloud'
                    },
                    {
                        name: 'Cloud Architecture Patterns',
                        url: 'https://learn.microsoft.com/en-us/azure/architecture/patterns/',
                        type: 'documentation',
                        platform: 'Microsoft'
                    }
                ]
            },
            {
                title: 'DevOps',
                resources: [
                    {
                        name: 'Docker Guide',
                        url: 'https://docs.docker.com/get-started/',
                        type: 'tutorial',
                        platform: 'Docker'
                    },
                    {
                        name: 'Kubernetes Learning',
                        url: 'https://kubernetes.io/docs/tutorials/',
                        type: 'tutorial',
                        platform: 'Kubernetes'
                    },
                    {
                        name: 'CI/CD Pipeline',
                        url: 'https://www.jenkins.io/doc/tutorials/',
                        type: 'tutorial',
                        platform: 'Jenkins'
                    }
                ]
            },
            {
                title: 'Cloud Security',
                resources: [
                    {
                        name: 'AWS Security Best Practices',
                        url: 'https://aws.amazon.com/security/security-learning/',
                        type: 'course',
                        platform: 'AWS'
                    },
                    {
                        name: 'Cloud Security Alliance',
                        url: 'https://cloudsecurityalliance.org/education/',
                        type: 'certification',
                        platform: 'CSA'
                    }
                ]
            },
            {
                title: 'DevOps Networking Fundamentals',
                resources: [
                    {
                        name: 'Network DevOps: Cisco DevNet Associate',
                        url: 'https://developer.cisco.com/certification/devnet-associate/',
                        type: 'certification',
                        platform: 'Cisco'
                    },
                    {
                        name: 'AWS Networking Essentials',
                        url: 'https://aws.amazon.com/training/learn-about/networking/',
                        type: 'course',
                        platform: 'AWS'
                    },
                    {
                        name: 'Azure Networking Fundamentals',
                        url: 'https://learn.microsoft.com/en-us/training/paths/azure-network-fundamentals/',
                        type: 'course',
                        platform: 'Microsoft'
                    },
                    {
                        name: 'Linux Networking for DevOps Engineers',
                        url: 'https://www.linuxfoundation.org/training/linux-networking-and-administration/',
                        type: 'course',
                        platform: 'Linux Foundation'
                    },
                    {
                        name: 'Network Automation with Ansible',
                        url: 'https://www.ansible.com/resources/webinars-training/introduction-to-network-automation',
                        type: 'course',
                        platform: 'Red Hat'
                    },
                    {
                        name: 'AWS Advanced Networking',
                        url: 'https://aws.amazon.com/training/learn-about/advanced-networking/',
                        type: 'certification',
                        platform: 'AWS'
                    },
                    {
                        name: 'Azure Networking Solutions',
                        url: 'https://learn.microsoft.com/en-us/training/paths/architect-network-infrastructure/',
                        type: 'course',
                        platform: 'Microsoft'
                    },
                    {
                        name: 'GCP Network Design and Security',
                        url: 'https://www.cloudskillsboost.google/paths/11',
                        type: 'course',
                        platform: 'Google Cloud'
                    },
                    {
                        name: 'Docker Networking Deep Dive',
                        url: 'https://www.docker.com/blog/docker-networking/',
                        type: 'documentation',
                        platform: 'Docker'
                    },
                    {
                        name: 'Container Networking from Scratch',
                        url: 'https://www.cni.dev/docs/',
                        type: 'documentation',
                        platform: 'CNI'
                    },
                    {
                        name: 'Kubernetes Networking Fundamentals',
                        url: 'https://kubernetes.io/docs/concepts/cluster-administration/networking/',
                        type: 'documentation',
                        platform: 'Kubernetes'
                    },
                    {
                        name: 'Linux Container Networking',
                        url: 'https://www.linuxfoundation.org/training/container-networking-security-monitoring',
                        type: 'course',
                        platform: 'Linux Foundation'
                    },
                    {
                        name: 'Calico Network Policy and Security',
                        url: 'https://www.tigera.io/learn/tutorials/',
                        type: 'tutorial',
                        platform: 'Tigera'
                    }
                ]
            },
            {
                title: 'DevOps Networking Learning Path',
                resources: [
                    {
                        name: 'DevOps Network Engineer Roadmap',
                        url: 'https://roadmap.sh/devops',
                        type: 'roadmap',
                        platform: 'roadmap.sh'
                    },
                    {
                        name: 'The Complete Networking Fundamentals Course',
                        url: 'https://www.youtube.com/playlist?list=PLIFyRwBY_4bRLmKfP1KnZA6rZbRHtxmXi',
                        type: 'video-course',
                        platform: 'YouTube - Network Chuck'
                    },
                    {
                        name: 'DevOps Networking Fundamentals',
                        url: 'https://www.youtube.com/playlist?list=PLOspHqNVtKAA_5N3pI49wkH4WsTkeZ_eP',
                        type: 'video-course',
                        platform: 'YouTube - IBM Technology'
                    }
                ]
            },
            {
                title: 'Cloud Networking Core Skills',
                resources: [
                    {
                        name: 'AWS Networking Essentials - Free Course',
                        url: 'https://explore.skillbuilder.aws/learn/course/external/view/elearning/2023/aws-cloud-technical-essentials',
                        type: 'free-course',
                        platform: 'AWS Skill Builder'
                    },
                    {
                        name: 'Azure Networking - Free Course',
                        url: 'https://learn.microsoft.com/en-us/training/paths/az-104-manage-virtual-networks/',
                        type: 'free-course',
                        platform: 'Microsoft Learn'
                    },
                    {
                        name: 'Azure Networking Masterclass',
                        url: 'https://www.youtube.com/playlist?list=PLlVtbbG169nGlGPWs9xaLKT1KfwqREHbs',
                        type: 'video-course',
                        platform: 'YouTube - John Savill'
                    }
                ]
            },
            {
                title: 'Container & Kubernetes Networking',
                resources: [
                    {
                        name: 'Kubernetes Networking Deep Dive',
                        url: 'https://www.youtube.com/playlist?list=PLqq-6Pq4lTTa4ad5JISViSb2FVG8Vwa4o',
                        type: 'video-course',
                        platform: 'YouTube - JavaBrains'
                    },
                    {
                        name: 'Docker Networking - Free Course',
                        url: 'https://www.katacoda.com/courses/docker/networking-intro',
                        type: 'interactive',
                        platform: 'Katacoda'
                    },
                    {
                        name: 'Container Networking from Zero to Hero',
                        url: 'https://www.youtube.com/playlist?list=PLAeEwkvkd_Xg3fX0NvtR_jpqV4YYKS9zL',
                        type: 'video-course',
                        platform: 'YouTube - Nigel Poulton'
                    }
                ]
            },
            {
                title: 'Network Automation',
                resources: [
                    {
                        name: 'Network Automation with Python & Ansible',
                        url: 'https://www.youtube.com/playlist?list=PLOocymQm7YWakdZkBfCRIC06fv7xQE85N',
                        type: 'video-course',
                        platform: 'YouTube - David Bombal'
                    },
                    {
                        name: 'Free NetDevOps Course',
                        url: 'https://developer.cisco.com/video/net-prog-basics/',
                        type: 'free-course',
                        platform: 'Cisco DevNet'
                    },
                    {
                        name: 'Infrastructure as Code Essentials',
                        url: 'https://www.youtube.com/playlist?list=PLI1AtZo9B3YL_xpi19IuxFcTuCi2_thQT',
                        type: 'video-course',
                        platform: 'YouTube - Anton Putra'
                    }
                ]
            },
            {
                title: 'Networking Security & Best Practices',
                resources: [
                    {
                        name: 'Cloud Network Security',
                        url: 'https://www.youtube.com/playlist?list=PLIhvC56v63ILPDA2DQBv0IKzqsWTZxCkp',
                        type: 'video-course',
                        platform: 'YouTube - Cloud Security'
                    },
                    {
                        name: 'Network Security Fundamentals',
                        url: 'https://www.youtube.com/playlist?list=PLR0bgGon_WTK_UC0ZNTLWf6f4jHXr-0S9',
                        type: 'video-course',
                        platform: 'YouTube - Practical Networking'
                    },
                    {
                        name: 'Free Network Security Course',
                        url: 'https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity',
                        type: 'free-course',
                        platform: 'Cisco Networking Academy'
                    }
                ]
            }
        ]
    },
    'ui-ux': {
        title: 'UI/UX Design',
        description: 'Learn user interface and experience design',
        sections: [
            {
                title: 'UI Design Basics',
                resources: [
                    {
                        name: 'UI Design Fundamentals',
                        url: 'https://www.figma.com/resources/learn-design/',
                        type: 'tutorial',
                        platform: 'Figma'
                    },
                    {
                        name: 'Adobe XD Tutorials',
                        url: 'https://www.adobe.com/products/xd/learn/get-started.html',
                        type: 'tutorial',
                        platform: 'Adobe'
                    },
                    {
                        name: 'Material Design',
                        url: 'https://material.io/design',
                        type: 'documentation',
                        platform: 'Google'
                    }
                ]
            },
            {
                title: 'UX Principles',
                resources: [
                    {
                        name: 'UX Design Course',
                        url: 'https://www.coursera.org/learn/ux-design-fundamentals',
                        type: 'course',
                        platform: 'Coursera'
                    },
                    {
                        name: 'Nielsen Norman Group',
                        url: 'https://www.nngroup.com/articles/',
                        type: 'articles',
                        platform: 'NN/g'
                    },
                    {
                        name: 'UX Research Methods',
                        url: 'https://www.interaction-design.org/literature',
                        type: 'course',
                        platform: 'Interaction Design Foundation'
                    }
                ]
            },
            {
                title: 'Design Systems',
                resources: [
                    {
                        name: 'Design Systems 101',
                        url: 'https://www.designsystems.com/learn/',
                        type: 'course',
                        platform: 'DesignSystems.com'
                    },
                    {
                        name: 'Storybook',
                        url: 'https://storybook.js.org/tutorials/',
                        type: 'tutorial',
                        platform: 'Storybook'
                    }
                ]
            }
        ]
    },
    'qa': {
        title: 'Quality Assurance',
        description: 'Learn software testing and quality assurance',
        sections: [
            {
                title: 'Testing Fundamentals',
                resources: [
                    {
                        name: 'Software Testing Fundamentals',
                        url: 'https://www.guru99.com/software-testing.html',
                        type: 'tutorial',
                        platform: 'Guru99'
                    },
                    {
                        name: 'ISTQB Foundation Level',
                        url: 'https://www.istqb.org/certifications/certified-tester-foundation-level',
                        type: 'certification',
                        platform: 'ISTQB'
                    },
                    {
                        name: 'Test Case Design',
                        url: 'https://www.ministryoftesting.com/',
                        type: 'course',
                        platform: 'Ministry of Testing'
                    }
                ]
            },
            {
                title: 'Automation Testing',
                resources: [
                    {
                        name: 'Selenium WebDriver',
                        url: 'https://www.selenium.dev/documentation/webdriver/',
                        type: 'documentation',
                        platform: 'Selenium'
                    },
                    {
                        name: 'Cypress Testing',
                        url: 'https://docs.cypress.io/guides/overview/why-cypress',
                        type: 'documentation',
                        platform: 'Cypress'
                    },
                    {
                        name: 'Jest Testing Framework',
                        url: 'https://jestjs.io/docs/getting-started',
                        type: 'documentation',
                        platform: 'Jest'
                    }
                ]
            },
            {
                title: 'Performance Testing',
                resources: [
                    {
                        name: 'JMeter Tutorial',
                        url: 'https://jmeter.apache.org/usermanual/get-started.html',
                        type: 'tutorial',
                        platform: 'Apache'
                    },
                    {
                        name: 'Load Testing Basics',
                        url: 'https://k6.io/docs/',
                        type: 'documentation',
                        platform: 'k6'
                    }
                ]
            }
        ]
    },
    'algorithms': {
        title: 'Data Structures & Algorithms',
        description: 'Master algorithmic problem solving and data structures',
        sections: [
            {
                title: 'Data Structures',
                resources: [
                    {
                        name: 'Visualgo',
                        url: 'https://visualgo.net/',
                        type: 'interactive',
                        platform: 'VisuAlgo'
                    },
                    {
                        name: 'MIT OpenCourseWare DSA',
                        url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/',
                        type: 'course',
                        platform: 'MIT'
                    }
                ]
            },
            {
                title: 'Algorithm Practice',
                resources: [
                    {
                        name: 'LeetCode Problems',
                        url: 'https://leetcode.com/',
                        type: 'practice',
                        platform: 'LeetCode'
                    },
                    {
                        name: 'HackerRank Algorithms',
                        url: 'https://www.hackerrank.com/domains/algorithms',
                        type: 'practice',
                        platform: 'HackerRank'
                    }
                ]
            },
            {
                title: 'Advanced Algorithms',
                resources: [
                    {
                        name: 'Stanford Algorithms Specialization',
                        url: 'https://www.coursera.org/specializations/algorithms',
                        type: 'course',
                        platform: 'Coursera'
                    },
                    {
                        name: 'Competitive Programming Handbook',
                        url: 'https://cses.fi/book/book.pdf',
                        type: 'book',
                        platform: 'CSES'
                    },
                    {
                        name: 'Algorithm Visualizations',
                        url: 'https://algorithm-visualizer.org/',
                        type: 'interactive',
                        platform: 'Algorithm Visualizer'
                    }
                ]
            }
        ]
    },
    'mobile-development': {
        title: 'Mobile Development',
        description: 'Learn mobile app development for iOS and Android platforms',
        sections: [
            {
                title: 'iOS Development',
                resources: [
                    {
                        name: 'Swift Programming',
                        url: 'https://docs.swift.org/swift-book/',
                        type: 'documentation',
                        platform: 'Swift'
                    },
                    {
                        name: 'iOS App Dev Tutorials',
                        url: 'https://developer.apple.com/tutorials/app-dev-training',
                        type: 'tutorial',
                        platform: 'Apple'
                    }
                ]
            },
            {
                title: 'Android Development',
                resources: [
                    {
                        name: 'Android Fundamentals',
                        url: 'https://developer.android.com/courses',
                        type: 'course',
                        platform: 'Google'
                    },
                    {
                        name: 'Kotlin Programming',
                        url: 'https://kotlinlang.org/docs/tutorials/',
                        type: 'tutorial',
                        platform: 'Kotlin'
                    }
                ]
            },
            {
                title: 'Cross-Platform Development',
                resources: [
                    {
                        name: 'React Native',
                        url: 'https://reactnative.dev/docs/getting-started',
                        type: 'documentation',
                        platform: 'React Native'
                    },
                    {
                        name: 'Flutter',
                        url: 'https://flutter.dev/learn',
                        type: 'tutorial',
                        platform: 'Google'
                    }
                ]
            }
        ]
    }
};