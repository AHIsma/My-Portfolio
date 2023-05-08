import * as React from "react";
import { useTranslation } from "react-i18next";
import "./loading.css"

const Loading = (props) => {
    const { t } = useTranslation();

    return (
        <>
            <div className="preloader-1">
                <div>{t("loading")}</div>
                <span className="line line-1"></span>
                <span className="line line-2"></span>
                <span className="line line-3"></span>
                <span className="line line-4"></span>
                <span className="line line-5"></span>
                <span className="line line-6"></span>
                <span className="line line-7"></span>
                <span className="line line-8"></span>
                <span className="line line-9"></span>
            </div>
        </>
    );
};

export default Loading;
