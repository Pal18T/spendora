"use client"
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { categoryColors } from '@/data/categories';
import { format } from 'date-fns';
import { Clock, MoreHorizontal, RefreshCw } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'


const RECURRING_INTERVALS = {
    DAILY: "Daily",
    WEEKLY: "Weekly",
    MONTHLY: "Monthly",
    YEARLY: "Yearly",
  };
const TransactionTable = ({ transactions }) => {

    const router = useRouter();
    const filteredAndSortedTransactions = transactions;

    const handleSort = () => { };
    return (
        <div className="space-y-4">
            {/* Filters */}

            {/* Transactions */}
            <div className=" rounded-md border">


                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px]">
                                <Checkbox />
                            </TableHead>
                            <TableHead onClick={() => handleSort("date")} className="cursor-pointer">
                                <div className="flex items-center">Date</div>
                            </TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead onClick={() => handleSort("category")} className="cursor-pointer">
                                <div className="flex items-center">Category</div>
                            </TableHead>
                            <TableHead onClick={() => handleSort("amount")} className="cursor-pointer">
                                <div className='flex items-center justify-end'>Amount</div>
                            </TableHead>
                            <TableHead>Recurring</TableHead>
                            <TableHead className="w-[50px]" />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredAndSortedTransactions.length === 0 ? (
                            <TableRow>
                                <TableCell colspan={7} className="text-muted-foreground">
                                    No TransactionS Found
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredAndSortedTransactions.map((transaction) => (
                                <TableRow key={transaction.id}>
                                    <TableCell className="">
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell>{format(new Date(transaction.date), "PP")}</TableCell>

                                    <TableCell>{transaction.description}</TableCell>
                                    <TableCell className="capitalize">
                                        <span style={{ background: categoryColors[transaction.category], }} className="px-2 py-1 rounded text-white text-sm">
                                            {transaction.category}
                                        </span>

                                    </TableCell>
                                    <TableCell className="text-right font-medium"
                                        style={{
                                            color: transaction.type === "EXPENSE" ? "red" : "green",
                                        }}
                                    >
                                        {transaction.type === "EXPENSE" ? "-" : "+"}

                                        ${transaction.amount.toFixed(2)}
                                    </TableCell>
                                    <TableCell>{transaction.isRecurring ? (
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Badge variant="outline" className="gap-1 bg-purple-100 text-purple-700 hover:bg-purple-200">
                                                        <RefreshCw className="h-3 w-3" />
                                                        {RECURRING_INTERVALS[transaction.recurringInterval]}
                                                    </Badge>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <div className="text-sm">
                                                        <div className="font-medium">Next date: </div>
                                                        <div>
                                                            {format(new Date(transaction.nextRecurringDate), "PP")}
                                                        </div>
                                                    </div>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>

                                    ) : (
                                        <Badge variant="outline" className="gap-1">
                                            <Clock className="h-3 w-3" />
                                            One-time
                                        </Badge>
                                    )}
                                    </TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0">
                                                    <MoreHorizontal className="h-4 w-4"/>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuLabel 
                                                onClick={() =>
                                                    router.push(
                                                      `/transaction/create?edit=${transaction.id}`
                                                    )
                                                  }
                                                >
                                                    Edit
                                                </DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>

                                    </TableCell>
                                </TableRow>

                            ))

                        )}
                    </TableBody>
                </Table>

            </div>
        </div>
    )
}

export default TransactionTable