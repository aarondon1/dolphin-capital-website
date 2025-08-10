"use client"
import Link from "next/link"
import Image from "next/image"
import { Mail, Linkedin, Twitter, Instagram, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/dolphin-capital-logo.png"
                alt="Dolphin Capital Logo"
                width={60}
                height={60}
                className="rounded-sm"
              />
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              The premier student-managed investment fund at the College of Staten Island, empowering the next
              generation of financial leaders through hands-on experience and collaborative learning.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:info@dolphincapital.csi.cuny.edu"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/dolphincapital_csi/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-gray-300 hover:text-white transition-colors">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  Annual Reports
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://csi.cuny.edu"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  CSI Website
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <Link href="/about#disclosures" className="text-gray-300 hover:text-white transition-colors">
                  Disclosures
                </Link>
              </li>
              <li>
                <Link href="/about#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <Link href="https://csi.cuny.edu" className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="CSI Logo"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="text-sm text-gray-300">College of Staten Island</span>
            </Link>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-300 mb-1">
              © {new Date().getFullYear()} Dolphin Capital. All rights reserved.
            </p>
            <p className="text-xs text-gray-400">Student-Managed Investment Fund | College of Staten Island</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
