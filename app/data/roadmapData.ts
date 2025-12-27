export type Resource = {
    label: string;
    url: string;
    type: 'video' | 'doc' | 'course' | 'playlist';
  };
  
  export type SubModule = {
    id: string;
    title: string;
    description: string;
    resources: Resource[];
  };
  
  export type Project = {
    title: string;
    description: string;
  };
  
  export type Topic = {
    id: number;
    title: string;
    tag: 'FOUNDATION' | 'CORE' | 'ADVANCED' | 'CAREER';
    description: string;
    subModules: SubModule[];
    projects: Project[]; // Changed from single object to Array for "2 projects"
  };
  
  export const roadmapData: Topic[] = [
    {
      id: 1,
      title: 'Phase 1: Excel Mastery',
      tag: 'FOUNDATION',
      description: 'Weeks 1-4: From blank sheets to data modeling.',
      projects: [
        { 
          title: 'Personal Budget Tracker', 
          description: 'Create a monthly budget with income/expense categories and IF formulas.' 
        },
        { 
          title: 'Sales Dashboard', 
          description: 'Build a dynamic dashboard using Pivot Tables, Slicers, and Charts.' 
        }
      ],
      subModules: [
        {
          id: 'ex-wk1',
          title: 'Week 1: Excel Basics',
          description: 'Interface, formatting, basic formulas, sorting & filtering.',
          resources: [
            { label: 'Excel Full Course (freeCodeCamp)', url: 'https://youtu.be/Vl0H-qTclOg', type: 'video' }
          ]
        },
        {
          id: 'ex-wk2',
          title: 'Week 2: Functions & Analysis',
          description: 'IF, COUNTIF, VLOOKUP, XLOOKUP, and Data Cleaning.',
          resources: [
            { label: 'Excel for Analysis Playlist', url: 'https://youtube.com/playlist?list=PLUaB-1hjhk8FE_XZ87vPPSfHqb6OcM0cF', type: 'playlist' }
          ]
        },
        {
          id: 'ex-wk3',
          title: 'Week 3: Pivot Tables & Charts',
          description: 'Business charts, Pivot Tables, and Dashboard design.',
          resources: [
            { label: 'Excel Dashboard Projects', url: 'https://youtube.com/playlist?list=PLUaB-1hjhk8G0bZ1xZCz6Iu8j7NfQ4O8c', type: 'playlist' }
          ]
        },
        {
          id: 'ex-wk4',
          title: 'Week 4: Advanced Excel',
          description: 'Power Query, Data Modeling, and Automation basics.',
          resources: [
            { label: 'Power Query Playlist', url: 'https://youtube.com/playlist?list=PLrRPvpgDmw0mpV7gkzL4mB3z6V5G7syfO', type: 'playlist' }
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Phase 2: SQL Fundamentals',
      tag: 'CORE',
      description: 'Weeks 5-8: Database querying and manipulation.',
      projects: [
        { 
          title: 'Employee Database Analysis', 
          description: 'Write queries to filter employees by department and calculate average salaries.' 
        },
        { 
          title: 'Customer Order History', 
          description: 'Use JOINs to combine customer and order tables to find top spenders.' 
        }
      ],
      subModules: [
        {
          id: 'sql-wk5',
          title: 'Week 5: SQL Basics',
          description: 'SELECT, WHERE, ORDER BY, conditions.',
          resources: [
            { label: 'SQL Full Course', url: 'https://youtu.be/HXV3zeQKqGY', type: 'video' }
          ]
        },
        {
          id: 'sql-wk6',
          title: 'Week 6: Aggregation & Joins',
          description: 'GROUP BY, HAVING, INNER/LEFT/RIGHT JOINS.',
          resources: [
            { label: 'SQL for Data Analysis', url: 'https://youtube.com/playlist?list=PLUaB-1hjhk8HTgPnBukmMq7QTe83ANirL', type: 'playlist' }
          ]
        },
        {
          id: 'sql-wk7',
          title: 'Week 7: Advanced SQL',
          description: 'Subqueries, Window Functions, Case Statements.',
          resources: [
            { label: 'Advanced SQL Playlist', url: 'https://youtube.com/playlist?list=PL6aXk7k7f3J9k9p6TnMZ7Mbb2F8VfY8tT', type: 'playlist' }
          ]
        },
        {
          id: 'sql-wk8',
          title: 'Week 8: SQL Practice',
          description: 'Hands-on practice problems.',
          resources: [
            { label: 'SQLBolt Practice', url: 'https://sqlbolt.com/', type: 'course' },
            { label: 'HackerRank SQL', url: 'https://www.hackerrank.com/domains/sql', type: 'course' }
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Phase 3: Power BI Visualization',
      tag: 'ADVANCED',
      description: 'Weeks 9-11: Data modeling and interactive reporting.',
      projects: [
        { 
          title: 'HR Analytics Dashboard', 
          description: 'Visualize employee attrition, demographics, and performance metrics.' 
        },
        { 
          title: 'E-commerce Revenue Analysis', 
          description: 'Track sales trends, product performance, and regional revenue.' 
        }
      ],
      subModules: [
        {
          id: 'pbi-wk9',
          title: 'Week 9: Power BI Basics',
          description: 'Import data, Data modeling, and basic Visuals.',
          resources: [
            { label: 'Power BI Full Course', url: 'https://youtu.be/AGrl-H87pRU', type: 'video' }
          ]
        },
        {
          id: 'pbi-wk10',
          title: 'Week 10: DAX & Advanced',
          description: 'Measures, Calculated columns, Time Intelligence.',
          resources: [
            { label: 'DAX by SQLBI', url: 'https://youtube.com/playlist?list=PLU6II7MW-aiK_f9fZCkQz6Jp3yq2xP9QY', type: 'playlist' }
          ]
        },
        {
          id: 'pbi-wk11',
          title: 'Week 11: Real Dashboards',
          description: 'Building professional, end-to-end dashboards.',
          resources: [
            { label: 'Power BI Projects', url: 'https://youtube.com/playlist?list=PLUaB-1hjhk8FMzSyaC7u2VfKJ2wb0Etz0', type: 'playlist' }
          ]
        }
      ]
    },
    {
      id: 4,
      title: 'Phase 4: Portfolio & Job Prep',
      tag: 'CAREER',
      description: 'Weeks 12-14: Building a portfolio and getting hired.',
      projects: [
        { 
          title: 'Integrated Sales Dashboard', 
          description: 'Full stack: Excel (Clean) -> SQL (Query) -> Power BI (Viz).' 
        },
        { 
          title: 'GitHub & LinkedIn Portfolio', 
          description: 'Upload all projects, write case studies, and optimize profile.' 
        }
      ],
      subModules: [
        {
          id: 'port-wk12',
          title: 'Week 12-14: Final Projects',
          description: 'Build and document your "Big 3" projects.',
          resources: [
            { label: 'Portfolio Guide', url: 'https://github.com/', type: 'doc' }
          ]
        }
      ]
    }
  ];