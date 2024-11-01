"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
    const searchParams = useSearchParams();
    const search = searchParams.getAll("name");

    console.log(search);

    return <div>page</div>;
};

export default page;
