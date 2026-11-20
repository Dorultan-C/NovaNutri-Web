import React from "react";
import Header from "@/components/Header";

export default function LicensePage() {
  return (
    <>
    <Header />
    <main id="content" className="w-full bg-background min-h-screen py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-heading tracking-tight mb-4">Software License</h1>
        <p className="text-muted mb-12 font-medium">Copyright &copy; 2026 Riov. All Rights Reserved.</p>

        <div className="card text-body space-y-6 leading-relaxed p-8">
          <p className="font-bold uppercase tracking-wider text-heading text-sm mb-6 pb-4 border-b border-line">
            Proprietary and Closed Source License
          </p>

          <p>
            <strong className="text-heading">1. Ownership:</strong> All source code, documentation, UI/UX designs, algorithms, and associated files contained in this repository are the exclusive property of Riov.
          </p>

          <div>
            <strong className="text-heading">2. Restrictions:</strong>
            <ol className="list-[lower-alpha] pl-5 mt-3 space-y-3">
              <li>You may not copy, reproduce, distribute, publish, display, perform, modify, create derivative works, transmit, or in any way exploit any such content, nor may you distribute any part of this content over any network, including a local area network, sell or offer it for sale, or use such content to construct any kind of database.</li>
              <li>You may not reverse engineer, decompile, or disassemble the software.</li>
              <li>You may not use the source code or software for any commercial purposes without explicit, written permission from the owner.</li>
            </ol>
          </div>

          <p className="uppercase text-sm font-semibold mt-8">
            <strong className="text-heading">3. No Warranty:</strong> THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS &quot;AS IS&quot; AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
          </p>

          <p className="uppercase text-sm font-semibold">
            IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES.
          </p>

          <p className="pt-6 border-t border-line font-medium text-heading">
            Unauthorized use of this code is strictly prohibited and constitutes a violation of copyright law.
          </p>
        </div>
      </div>
    </main>
    </>
  );
}