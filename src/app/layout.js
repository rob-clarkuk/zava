import { Open_Sans } from "next/font/google";
import { Provider } from "@/components/ui/provider"



const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zava Cravings Calculator",
  description: "Ready to curb your cravings? Answer 15 questions about your eating habits and general lifestyle to get your Cravings Persona and some advice for managing your eating.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={`${openSans.variable} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
