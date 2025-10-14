import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "../../lib/utils";

function Accordion({
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
	return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
	className,
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
	return (
		<AccordionPrimitive.Item
			data-slot="accordion-item"
			className={cn(
				"bg-theme-gray data-[state=open]:bg-theme-green transition-colors border border-theme-black rounded-[45px] py-[41px] px-[60px] shadow-[0_5px_0_0_#191A23]",
				className,
			)}
			{...props}
		/>
	);
}

function AccordionTrigger({
	className,
	children,
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
	return (
		<AccordionPrimitive.Header className="flex">
			<AccordionPrimitive.Trigger
				data-slot="accordion-trigger"
				className={cn(
					"focus-visible:border-ring focus-visible:ring-ring/50 text-black text-3xl flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>span>.plus]:rotate-0",
					className,
				)}
				{...props}
			>
				{children}
				<span className="relative pointer-events-none size-14 text-6xl rounded-full border border-theme-black bg-theme-gray flex items-center justify-center">
					<span className="plus absolute top-1/2 left-1/2 transition-transform rotate-90 transform -translate-x-1/2 -translate-y-1/2 w-6 h-1.5 bg-theme-black"></span>
					<span className="absolute top-1/2 left-1/2 transition-transform transform -translate-x-1/2 -translate-y-1/2 w-6 h-1.5 bg-theme-black"></span>
				</span>
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
}

function AccordionContent({
	className,
	children,
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
	return (
		<AccordionPrimitive.Content
			data-slot="accordion-content"
			className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-lg"
			{...props}
		>
			<div className={cn("pt-[30px] border-t border-theme-black", className)}>
				{children}
			</div>
		</AccordionPrimitive.Content>
	);
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
