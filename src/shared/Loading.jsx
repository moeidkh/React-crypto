import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center gap-4 h-3/4">
            <div className="w-8 h-8 bg-black rounded-full animate-[loading_1.5s_linear_infinite]"></div>
            <div className="w-8 h-8 bg-black rounded-full animate-[loading_1.5s_linear_infinite] delay1"></div>
            <div className="w-8 h-8 bg-black rounded-full animate-[loading_1.5s_linear_infinite] delay2"></div>
        </div>
    );
};

export default Loading;