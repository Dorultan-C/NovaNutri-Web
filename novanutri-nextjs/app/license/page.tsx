import React from "react";

export default function LicensePage() {
  return (
    <main className="w-full bg-surface min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-heading tracking-tight mb-4">Software License</h1>
        <p className="text-muted mb-12 font-medium">Copyright &copy; 2026 NovaNutri. All Rights Reserved.</p>

        <div className="text-body space-y-6 leading-relaxed bg-white p-8 rounded-3xl border border-muted/10 shadow-sm">
          <p className="font-bold uppercase tracking-wider text-heading text-sm mb-6 pb-4 border-b border-muted/10">
            Proprietary and Closed Source License
          </p>

          <p>
            <strong className="text-heading">1. Ownership:</strong> All source code, documentation, UI/UX designs, algorithms, and associated files contained in this repository are the exclusive property of NovaNutri.
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

          <p className="pt-6 border-t border-muted/10 font-medium text-heading">
            Unauthorized use of this code is strictly prohibited and constitutes a violation of copyright law.
          </p>
        </div>
      </div>
    </main>
  );
}