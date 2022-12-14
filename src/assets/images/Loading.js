import * as React from "react";
import { useTranslation } from "react-i18next";
import "./loading.css"

const Loading = (props) => {
    const { t } = useTranslation();

    return (
        <>
            <div class="preloader-1">
                <div>{t("loading")}</div>
                <span class="line line-1"></span>
                <span class="line line-2"></span>
                <span class="line line-3"></span>
                <span class="line line-4"></span>
                <span class="line line-5"></span>
                <span class="line line-6"></span>
                <span class="line line-7"></span>
                <span class="line line-8"></span>
                <span class="line line-9"></span>
            </div>
        </>
    );
};

export default Loading;
