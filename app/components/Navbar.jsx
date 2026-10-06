'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [loanOpen, setLoanOpen] = useState(false)
  const productsMenuRef = useRef(null)
  const solidNav = scrolled || pathname !== '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!productsOpen) return

    const handlePointerDown = (event) => {
      if (!productsMenuRef.current?.contains(event.target)) {
        setProductsOpen(false)
        setLoanOpen(false)
      }
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setProductsOpen(false)
        setLoanOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [productsOpen])

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${solidNav ? 'bg-white shadow-md border-b border-slate-200' : 'bg-transparent'
        }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-6 md:gap-8">
          <Link
            href="/"
            className={`flex items-center rounded-xl p-2 shadow-sm ring-1 backdrop-blur-sm transition ${scrolled ? 'bg-white ring-slate-200' : 'bg-white/10 ring-white/20'
              }`}
          >
            <Image
              src="/logos.svg"
              alt="logo"
              width={190}
              height={100}
              className="h-14 w-auto object-contain"
            />
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <div className="relative" ref={productsMenuRef}>
              <button
                type="button"
                aria-expanded={productsOpen}
                aria-haspopup="true"
                onClick={() => {
                  setProductsOpen((open) => !open)
                  setLoanOpen(false)
                }}
                className={`flex items-center gap-1 text-md font-medium transition ${solidNav ? 'text-slate-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
                  }`}
              >
                Products
                <span aria-hidden="true">▾</span>
              </button>
              <div className={`absolute left-0 top-full z-10 mt-3 w-52 flex-col rounded-xl border border-slate-200 bg-white p-2 shadow-lg ${productsOpen ? 'flex' : 'hidden'}`}>
                <div className="group/loan relative">
                  <button
                    type="button"
                    aria-expanded={loanOpen}
                    aria-haspopup="true"
                    onClick={() => setLoanOpen((open) => !open)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-slate-100 hover:text-blue-600"
                  >
                    Loan
                    <span aria-hidden="true">›</span>
                  </button>
                  <div className={`absolute left-full top-0 ml-2 w-44 flex-col rounded-xl border border-slate-200 bg-white p-2 shadow-lg ${loanOpen ? 'flex' : 'hidden'}`}>
                    <Link
                      href="/loan/personal-loan"
                      onClick={() => {
                        setProductsOpen(false)
                        setLoanOpen(false)
                      }}
                      className="rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-blue-600"
                    >
                      Personal Loan
                    </Link>
                    <Link
                      href="https://crm.oneandro.com/customer-service?d=c29mdGNvZGU9UktNQUhNVTMyNTk0ODU2JnByb2R1Y3RfaWQ9MSZzY29yZV90eXBlPUVxdWlmYXgmY2FtcGFpZ25fdHlwZT1Qcm9kdWN0JnByb2R1Y3RfY2F0ZWdvcnlfaWQ9MyZjYXRlZ29yeV9wdXJwb3NlX2lkPSZzb3VyY2U9Zmluc2FjayZzdWJfc291cmNlPXdlYnNpdGUmam91cm5leVN0b3BQb2ludD0mTGVuZGVyVHlwZT0mdXRtX3NvdXJjZT1xcl9nZW5lcmF0b3ImbG9naW5faWQ9MzI1OTQ4JnRva2VuX2tleT1SQ0gyRnNDeg%3D%3D"
                      onClick={() => {
                        setProductsOpen(false)
                        setLoanOpen(false)
                      }}
                      className="rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-blue-600"
                    >
                      Home Loan
                    </Link>
                    <Link
                      href="https://crm.oneandro.com/customer-service?d=c29mdGNvZGU9UktNQUhNVTMyNTk0ODU2JnByb2R1Y3RfaWQ9MSZzY29yZV90eXBlPUVxdWlmYXgmY2FtcGFpZ25fdHlwZT1Qcm9kdWN0JnByb2R1Y3RfY2F0ZWdvcnlfaWQ9NSZjYXRlZ29yeV9wdXJwb3NlX2lkPSZzb3VyY2U9Zmluc2FjayZzdWJfc291cmNlPXdlYnNpdGUmam91cm5leVN0b3BQb2ludD0mTGVuZGVyVHlwZT0mdXRtX3NvdXJjZT1xcl9nZW5lcmF0b3ImbG9naW5faWQ9MzI1OTQ4JnRva2VuX2tleT1vSFdPZW82cg%3D%3D"
                      onClick={() => {
                        setProductsOpen(false)
                        setLoanOpen(false)
                      }}
                      className="rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-blue-600"
                    >
                      Gold Loan
                    </Link>
                    <Link
                      href="https://crm.oneandro.com/customer-service?d=c29mdGNvZGU9UktNQUhNVTMyNTk0ODU2JnByb2R1Y3RfaWQ9MSZzY29yZV90eXBlPUVxdWlmYXgmY2FtcGFpZ25fdHlwZT1Qcm9kdWN0JnByb2R1Y3RfY2F0ZWdvcnlfaWQ9MiZjYXRlZ29yeV9wdXJwb3NlX2lkPSZzb3VyY2U9Zmluc2FjayZzdWJfc291cmNlPXdlYnNpdGUmam91cm5leVN0b3BQb2ludD0mTGVuZGVyVHlwZT0mdXRtX3NvdXJjZT1xcl9nZW5lcmF0b3ImbG9naW5faWQ9MzI1OTQ4JnRva2VuX2tleT10cThla2g0Wg%3D%3D"
                      onClick={() => {
                        setProductsOpen(false)
                        setLoanOpen(false)
                      }}
                      className="rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-blue-600"
                    >
                      Buisness Loan
                    </Link>
                    <Link
                      href="https://crm.oneandro.com/customer-service?d=c29mdGNvZGU9UktNQUhNVTMyNTk0ODU2JnByb2R1Y3RfaWQ9MSZzY29yZV90eXBlPUVxdWlmYXgmY2FtcGFpZ25fdHlwZT1Qcm9kdWN0JnByb2R1Y3RfY2F0ZWdvcnlfaWQ9NCZjYXRlZ29yeV9wdXJwb3NlX2lkPSZzb3VyY2U9Zmluc2FjayZzdWJfc291cmNlPXdlYnNpdGUmam91cm5leVN0b3BQb2ludD0mTGVuZGVyVHlwZT0mdXRtX3NvdXJjZT1xcl9nZW5lcmF0b3ImbG9naW5faWQ9MzI1OTQ4JnRva2VuX2tleT1Pd1FyeE9jMA%3D%3D"
                      onClick={() => {
                        setProductsOpen(false)
                        setLoanOpen(false)
                      }}
                      className="rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-blue-600"
                    >
                      Loan Against Property
                    </Link>
                  </div>
                </div>
                <Link
                  href="/product/credit-card"
                  onClick={() => {
                    setProductsOpen(false)
                    setLoanOpen(false)
                  }}
                  className="rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-blue-600"
                >
                  Credit Card
                </Link>
                <Link
                  href="/product/demate"
                  onClick={() => {
                    setProductsOpen(false)
                    setLoanOpen(false)
                  }}
                  className="rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-blue-600"
                >
                  Demate Account
                </Link>
                <Link
                  href="https://crm.oneandro.com/customer-service?d=c29mdF9jb2RlPVJLTUFITVUzMjU5NDg1NiZ0b2tlbl9rZXk9OTJwczlxbXEmbG9naW5faWQ9MzI1OTQ4JnNoYXJlX2xlYWRfdHlwZT0xJnV0bV9zb3VyY2U9c2hhcmVfbGluaw%3D%3D"
                  onClick={() => {
                    setProductsOpen(false)
                    setLoanOpen(false)
                  }}
                  className="rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-blue-600"
                >
                  Insurance
                </Link>
                <Link
                  href="/product/investment"
                  onClick={() => {
                    setProductsOpen(false)
                    setLoanOpen(false)
                  }}
                  className="rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-blue-600"
                >
                  Invesment
                </Link>
                <Link
                  href="/product/bank-account"
                  onClick={() => {
                    setProductsOpen(false)
                    setLoanOpen(false)
                  }}
                  className="rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-blue-600"
                >
                  Bank Account
                </Link>
              </div>
            </div>

            <Link
              href="/cibil-score"
              className={`text-md font-medium transition ${solidNav ? 'text-slate-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
            >
              Cibil Score
            </Link>
            <Link
              href="/emi-calculator"
              className={`text-md font-medium transition ${solidNav ? 'text-slate-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
            >
              EMI Calculator
            </Link>
          </div>
        </div>

        <Link
          href="https://crm.oneandro.com/customer-service?d=c29mdF9jb2RlPVJLTUFITVUzMjU5NDg1NiZ0b2tlbl9rZXk9OTJwczlxbXEmbG9naW5faWQ9MzI1OTQ4JnNoYXJlX2xlYWRfdHlwZT0xJnV0bV9zb3VyY2U9c2hhcmVfbGluaw%3D%3D"
          className={`inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold shadow-lg transition ${solidNav
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-blue-500 text-white shadow-blue-900/30 hover:bg-blue-400'
            }`}
        >
          Apply Now
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
