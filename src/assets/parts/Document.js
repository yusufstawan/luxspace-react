import useModalDOM from "assets/helpers/hooks/useModalDOM";
import useScrollAnchor from "assets/helpers/hooks/useScrollAnchor";
import useScrollToTop from "assets/helpers/hooks/useScrollToTop";

export default function Documents({ children }) {
    useModalDOM()
    useScrollAnchor()
    useScrollToTop()
    return children
}
