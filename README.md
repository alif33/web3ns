This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Naming Conventions followed:

1. Files and Folders
Lowercase: Use lowercase letters for file and folder names. If a name comprises multiple words, use hyphens (-) to separate them. This convention is particularly recommended for non-component files and directories.

Example:

Folders: pages/about, lib/hooks
Files: user-profile.js, fetch-data.js
2. Component Files
PascalCase: React component filenames should be written in PascalCase, where each word starts with a capital letter, including the first word. This applies to both the file name and the component name itself. For component-specific styles or tests, match the component file name.

Example:

Component: UserProfile.js
Style (if using CSS Modules): UserProfile.module.css
Test: UserProfile.test.js
3. Functions
camelCase: Regular JavaScript functions and methods, including React hooks and event handlers, should be in camelCase, starting with a lowercase letter and capitalizing the first letter of subsequent words.

Example:

Functions: fetchUserData(), handleClick()
Hooks: useUserData()
4. Constants
UPPER_SNAKE_CASE: Constants that hold fixed values (especially ones that are exported and used in various parts of your application) should be named in uppercase with underscores separating words.

Example: const API_ENDPOINT = "https://api.example.com";

5. Environment Variables
UPPER_SNAKE_CASE: For environment variables, especially in a .env file, use uppercase letters with underscores separating words. Prefixing them with NEXT_PUBLIC_ exposes them to the browser in Next.js applications.

Example: NEXT_PUBLIC_API_URL="https://api.example.com"

6. JSX Props
camelCase: Props passed to React components should also follow the camelCase convention.

Example: <UserProfile userName="johnDoe" />

7. CSS Modules
camelCase or kebab-case: For class names within CSS Modules, you can choose between camelCase and kebab-case. If you choose camelCase, it allows you to access class names as object properties without quotes. This choice often depends on team preference.

Example:

CSS Module: .userProfile {} or .user-profile {}
In Component: styles.userProfile or styles['user-profile']
8. TypeScript Types and Interfaces
PascalCase: Types and interfaces should be in PascalCase. Prefix interfaces with an uppercase "I" is a convention in some coding standards (mostly C#), but it's not commonly adopted in TypeScript due to its structural typing system.

Example: type UserProfile = {} or interface UserProfile {}


##Redux Tool Kit

Always import useSelector and useDispatch from the "@/lib/hooks" or "src/lib/hooks" , these are typed versions of imports from react redux 


##  Toaster

We are using react-toasify package to toast an success,error messages