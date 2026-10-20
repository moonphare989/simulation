'use client'

import type { SimDocument } from '@/lib/types'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { FileText, Table2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export function DocumentViewer({
  document: doc,
  compact = false,
}: {
  document: SimDocument
  compact?: boolean
}) {
  if (doc.kind === 'table') {
    return (
      <div className={cn('rounded-lg border bg-card', compact && 'text-xs')}>
        <div className="flex items-center gap-2 border-b bg-muted/40 px-3 py-2">
          <Table2 className="h-3.5 w-3.5 text-primary" aria-hidden />
          <span className="text-sm font-medium">{doc.name}</span>
        </div>
        <div className="auditlab-scroll max-h-96 overflow-auto">
          <Table>
            <TableHeader className="sticky top-0 z-10 bg-card">
              <TableRow>
                {doc.columns.map((col, i) => (
                  <TableHead key={i} className="whitespace-nowrap text-xs">
                    {col}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {doc.rows.map((row, ri) => (
                <TableRow key={ri}>
                  {row.map((cell, ci) => (
                    <TableCell
                      key={ci}
                      className={cn(
                        'whitespace-nowrap text-xs',
                        typeof cell === 'number' && 'text-right font-mono tabular-nums'
                      )}
                    >
                      {typeof cell === 'number'
                        ? cell.toLocaleString('fr-FR', { maximumFractionDigits: 2 })
                        : cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {doc.note ? (
          <p className="border-t px-3 py-2 text-xs italic text-muted-foreground">{doc.note}</p>
        ) : null}
      </div>
    )
  }

  return (
    <div className="rounded-lg border bg-card">
      <div className="flex items-center gap-2 border-b bg-muted/40 px-3 py-2">
        <FileText className="h-3.5 w-3.5 text-primary" aria-hidden />
        <span className="text-sm font-medium">{doc.name}</span>
        <Badge variant="outline" className="ml-auto text-[10px] font-normal">
          Document fictif
        </Badge>
      </div>
      <pre className="auditlab-scroll max-h-96 overflow-auto whitespace-pre-wrap px-4 py-3 font-mono text-xs leading-relaxed">
        {doc.content}
      </pre>
      {doc.note ? (
        <p className="border-t px-3 py-2 text-xs italic text-muted-foreground">{doc.note}</p>
      ) : null}
    </div>
  )
}
