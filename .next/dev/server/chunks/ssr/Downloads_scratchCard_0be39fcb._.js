module.exports = [
"[project]/Downloads/scratchCard/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScratchCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/scratchCard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/scratchCard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function ScratchCard() {
    const [isScratched, setIsScratched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imageCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isDrawing, setIsDrawing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scratchPercentage, setScratchPercentage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [bgColor, setBgColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("purple");
    const bgColors = {
        purple: "from-purple-900 via-purple-800 to-indigo-900",
        violet: "from-violet-900 via-purple-900 to-fuchsia-900",
        deep: "from-indigo-950 via-purple-950 to-purple-900",
        royal: "from-purple-800 via-violet-800 to-purple-900"
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const width = 300;
        const height = 500;
        canvas.width = width;
        canvas.height = height;
        // Create gradient background
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, "#a855f7");
        gradient.addColorStop(0.5, "#9333ea");
        gradient.addColorStop(1, "#7e22ce");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        // Add sparkle effects
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
        for(let i = 0; i < 30; i++){
            const x = Math.random() * width;
            const y = Math.random() * height;
            const size = Math.random() * 3 + 1;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }
        // Add text with shadow
        ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.fillStyle = "white";
        ctx.font = 'bold 56px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Scratch", width / 2, height / 2 - 100);
        ctx.fillText("& Win!", width / 2, height / 2 - 30);
        // Add gift icon with glow
        ctx.shadowBlur = 20;
        ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
        ctx.font = "120px Arial";
        ctx.fillText("🎁", width / 2, height / 2 + 100);
        // Reset shadow
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        const imageCanvas = imageCanvasRef.current;
        if (imageCanvas) {
            const imgCtx = imageCanvas.getContext("2d");
            if (imgCtx) {
                imageCanvas.width = width;
                imageCanvas.height = height;
                // Create gradient background
                const gradient = imgCtx.createLinearGradient(0, 0, 0, height);
                gradient.addColorStop(0, "#faf5ff");
                gradient.addColorStop(1, "#f3e8ff");
                imgCtx.fillStyle = gradient;
                imgCtx.fillRect(0, 0, width, height);
                // Decorative circles
                imgCtx.fillStyle = "rgba(168, 85, 247, 0.1)";
                imgCtx.beginPath();
                imgCtx.arc(-30, 50, 100, 0, Math.PI * 2);
                imgCtx.fill();
                imgCtx.beginPath();
                imgCtx.arc(width + 30, height - 50, 120, 0, Math.PI * 2);
                imgCtx.fill();
                // Logo with gradient
                const logoGradient = imgCtx.createLinearGradient(0, 40, 0, 80);
                logoGradient.addColorStop(0, "#9333ea");
                logoGradient.addColorStop(1, "#7e22ce");
                imgCtx.fillStyle = logoGradient;
                imgCtx.font = "bold 36px Georgia, serif";
                imgCtx.textAlign = "center";
                imgCtx.fillText("CLAY", width / 2, 70);
                imgCtx.font = "bold 14px Georgia, serif";
                imgCtx.fillStyle = "#a855f7";
                imgCtx.fillText("Co.", width / 2 + 50, 65);
                imgCtx.strokeStyle = "#e9d5ff";
                imgCtx.lineWidth = 2;
                imgCtx.beginPath();
                imgCtx.moveTo(40, 100);
                imgCtx.lineTo(width - 40, 100);
                imgCtx.stroke();
                imgCtx.fillStyle = "#9333ea";
                imgCtx.beginPath();
                imgCtx.roundRect(width / 2 - 60, 120, 120, 40, 20);
                imgCtx.fill();
                imgCtx.fillStyle = "white";
                imgCtx.font = 'bold 20px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
                imgCtx.fillText("20% OFF", width / 2, 145);
                imgCtx.font = 'bold 26px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
                imgCtx.fillStyle = "#1f2937";
                imgCtx.fillText("Special Discount", width / 2, 195);
                imgCtx.font = '14px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
                imgCtx.fillStyle = "#6b7280";
                imgCtx.fillText("+ Free Gift with ₹299 Purchase", width / 2, 220);
                imgCtx.shadowColor = "rgba(0, 0, 0, 0.1)";
                imgCtx.shadowBlur = 15;
                imgCtx.shadowOffsetY = 5;
                imgCtx.fillStyle = "white";
                imgCtx.beginPath();
                imgCtx.roundRect(30, 250, width - 60, 90, 15);
                imgCtx.fill();
                imgCtx.shadowBlur = 0;
                imgCtx.shadowOffsetY = 0;
                imgCtx.strokeStyle = "#e9d5ff";
                imgCtx.lineWidth = 2;
                imgCtx.setLineDash([
                    5,
                    5
                ]);
                imgCtx.beginPath();
                imgCtx.roundRect(30, 250, width - 60, 90, 15);
                imgCtx.stroke();
                imgCtx.setLineDash([]);
                imgCtx.fillStyle = "#9333ea";
                imgCtx.font = '12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
                imgCtx.textAlign = "center";
                imgCtx.fillText("COUPON CODE", width / 2, 275);
                imgCtx.fillStyle = "#1f2937";
                imgCtx.font = "bold 28px monospace";
                imgCtx.fillText("CCBB20", width / 2, 310);
                imgCtx.fillStyle = "#f3e8ff";
                imgCtx.beginPath();
                imgCtx.roundRect(width / 2 + 60, 295, 30, 30, 8);
                imgCtx.fill();
                imgCtx.fillStyle = "#9333ea";
                imgCtx.font = "18px Arial";
                imgCtx.fillText("📋", width / 2 + 75, 313);
                const btnGradient = imgCtx.createLinearGradient(0, 370, 0, 420);
                btnGradient.addColorStop(0, "#a855f7");
                btnGradient.addColorStop(1, "#9333ea");
                imgCtx.fillStyle = btnGradient;
                imgCtx.beginPath();
                imgCtx.roundRect(30, 370, width - 60, 50, 25);
                imgCtx.fill();
                imgCtx.fillStyle = "white";
                imgCtx.font = 'bold 18px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
                imgCtx.fillText("Claim Now 🎉", width / 2, 400);
                imgCtx.fillStyle = "#9ca3af";
                imgCtx.font = '11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
                imgCtx.fillText("*Terms and Conditions Apply", width / 2, 455);
                imgCtx.fillText("Valid until Dec 31, 2025", width / 2, 475);
            }
        }
    }, []);
    const handleScratch = (e)=>{
        if (isScratched) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const rect = canvas.getBoundingClientRect();
        let x, y;
        if ('touches' in e) {
            x = e.touches[0].clientX - rect.left;
            y = e.touches[0].clientY - rect.top;
        } else {
            x = e.clientX - rect.left;
            y = e.clientY - rect.top;
        }
        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.arc(x, y, 40, 0, Math.PI * 2);
        ctx.fill();
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        let transparentPixels = 0;
        for(let i = 3; i < data.length; i += 4){
            if (data[i] < 128) {
                transparentPixels++;
            }
        }
        const percentage = transparentPixels / (data.length / 4) * 100;
        setScratchPercentage(percentage);
        if (percentage > 50) {
            setIsScratched(true);
        }
    };
    const copyToClipboard = ()=>{
        navigator.clipboard.writeText("CCBB20");
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen bg-gradient-to-br ${bgColors[bgColor]} flex items-center justify-center p-4 relative overflow-hidden`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-40 right-10 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-20 left-1/2 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-6 right-6 flex gap-2 z-50",
                children: Object.keys(bgColors).map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setBgColor(color),
                        className: `w-10 h-10 rounded-full border-2 transition-all ${bgColor === color ? "border-white scale-110" : "border-white/30 hover:border-white/60"} ${color === "purple" ? "bg-gradient-to-br from-purple-900 to-indigo-900" : "bg-gradient-to-br from-purple-800 to-purple-900"}`,
                        title: color
                    }, color, false, {
                        fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col items-center gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center space-y-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl md:text-6xl font-bold text-white drop-shadow-2xl",
                            children: "🎁 Claim Your Rewards!"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                            lineNumber: 283,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-sm transform hover:scale-105 transition-transform duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-b from-gray-900 to-black rounded-[3rem] shadow-2xl overflow-hidden border-[14px] border-gray-900 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-3 left-1/2 -translate-x-1/2 z-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-6 h-6 bg-black rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-gray-700 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 5
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                                        lineNumber: 294,
                                        columnNumber: 3
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                                    lineNumber: 293,
                                    columnNumber: 1
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-b from-white to-gray-50 w-full flex items-center justify-center relative overflow-hidden",
                                    style: {
                                        height: "600px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-8 text-xs text-gray-800 z-40",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "9:41"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "📶"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                                                            lineNumber: 309,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "📡"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "🔋"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                                            lineNumber: 306,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 flex items-center justify-center pt-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                                ref: imageCanvasRef,
                                                className: "rounded-2xl",
                                                style: {
                                                    width: "300px",
                                                    height: "500px"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                                                lineNumber: 316,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                                            lineNumber: 315,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full flex items-center justify-center p-6 pt-14",
                                            children: [
                                                !isScratched && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                                    ref: canvasRef,
                                                    onMouseDown: ()=>setIsDrawing(true),
                                                    onMouseUp: ()=>setIsDrawing(false),
                                                    onMouseMove: (e)=>isDrawing && handleScratch(e),
                                                    onTouchStart: ()=>setIsDrawing(true),
                                                    onTouchEnd: ()=>setIsDrawing(false),
                                                    onTouchMove: handleScratch,
                                                    className: "cursor-pointer rounded-2xl shadow-2xl relative z-10 hover:shadow-purple-500/50 transition-shadow",
                                                    style: {
                                                        touchAction: "none",
                                                        width: "300px",
                                                        height: "500px"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 19
                                                }, this),
                                                isScratched && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative z-20 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-500",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                                        ref: imageCanvasRef,
                                                        style: {
                                                            width: "300px",
                                                            height: "500px"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                                            lineNumber: 326,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                                            lineNumber: 359,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                            lineNumber: 291,
                            columnNumber: 3
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                        lineNumber: 290,
                        columnNumber: 1
                    }, this),
                    !isScratched && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center space-y-2 animate-bounce",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white text-lg font-semibold",
                                children: "👆 Scratch to reveal"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                                lineNumber: 367,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-purple-200 text-sm",
                                    children: [
                                        "Progress: ",
                                        scratchPercentage.toFixed(0),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                                    lineNumber: 369,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                                lineNumber: 368,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                        lineNumber: 366,
                        columnNumber: 11
                    }, this),
                    isScratched && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center space-y-3 animate-in slide-in-from-bottom duration-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white text-2xl font-bold mb-2",
                                    children: "🎉 Congratulations!"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                                    lineNumber: 378,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-purple-200",
                                    children: "Claim your coupon"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                                    lineNumber: 379,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$scratchCard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: copyToClipboard,
                                    className: "mt-4 bg-white text-purple-900 px-6 py-2 rounded-full font-semibold hover:bg-purple-100 transition-colors",
                                    children: copied ? "✓ Copied!" : "Copy Code"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                                    lineNumber: 380,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                            lineNumber: 377,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                        lineNumber: 376,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/scratchCard/app/page.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/scratchCard/app/page.tsx",
        lineNumber: 253,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/scratchCard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Downloads/scratchCard/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=Downloads_scratchCard_0be39fcb._.js.map