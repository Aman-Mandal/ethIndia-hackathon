import TransactionContextProvider, {
  TransactionContext,
} from "../context/Context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <TransactionContextProvider>
      <Component {...pageProps} />
    </TransactionContextProvider>
  );
}

export default MyApp;
