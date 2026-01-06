/**
 * Portfolio Case Preview Functionality
 */

// Case study data
const caseStudies = {
  'strategic-simulation': {
    title: 'Smart Dispatch Optimization',
    subtitle: 'Price-aware generator scheduling for 6 GW thermal fleet',
    category: 'Energy',
    overview: 'A logistics company struggled with inefficient route planning, leading to delays and increased costs.',
    delivery: 'Built an optimization model using strategic simulation and scenario analysis to optimize dispatch operations.',
    impact: 'Reduced delivery time by 25% and lowered operational costs by 15%.',
    longform: `The engagement focused on improving profitability and reliability in thermal power generation by replacing heuristic-based scheduling with a structured, price-aware decision framework. The client operated in a competitive electricity market where prices varied significantly across time blocks, but generator dispatch decisions were largely based on static rules and short-term intuition. This resulted in suboptimal generation during low-price periods and missed opportunities during favorable market conditions.

We began by analyzing historical electricity market prices, demand patterns, and generator operating constraints. A forecasting model was developed to estimate short-term market prices, capturing intraday volatility and demand-driven fluctuations. These forecasts were then integrated into an optimization-based scheduling model that determined when and how much each generation unit should produce, while respecting technical constraints such as ramp rates, minimum load levels, and fuel costs.

Multiple scheduling strategies were evaluated through scenario analysis to compare existing brute-force approaches with the proposed price-aware framework. The model explicitly balanced revenue opportunities against operational risks, allowing decision-makers to understand trade-offs rather than relying on conservative rules. Sensitivity analysis was conducted to assess how forecast errors and demand uncertainty impacted profitability and system stability.

The outcome was a structured scheduling approach that consistently aligned generation decisions with expected market conditions. Compared to the earlier method, the optimized schedules demonstrated higher expected profit, reduced exposure to unfavorable price periods, and improved predictability in operations. The framework also created a foundation for future enhancements, such as stress-testing schedules under extreme price scenarios and integrating renewable generation uncertainty. Overall, the project demonstrated how combining forecasting with optimization can convert volatile market conditions into a controllable, profit-driven decision process.`,
    image: 'assets/img/ourwork/case-1.jpg'
  },
  'manufacturing-des': {
    title: 'Manufacturing Plant Optimization Using DES',
    subtitle: 'Discrete Event Simulation for production efficiency',
    category: 'Manufacturing',
    overview: 'A manufacturing plant faced production bottlenecks causing delays in order fulfillment.',
    delivery: 'Developed a Discrete Event Simulation (DES) model to identify and resolve production bottlenecks.',
    impact: 'Increased production throughput by 30% without additional capital investment.',
    longform: `This project addressed operational inefficiencies in a labor-intensive manufacturing plant producing multiple product variants under varying demand conditions. Although the plant had stable demand overall, management lacked clear visibility into true capacity, bottlenecks, and the impact of labor allocation decisions. Improvement initiatives were often debated qualitatively, with limited confidence in their actual outcomes.

We developed a detailed discrete event simulation model that replicated the end-to-end production flow, including processing times, labor assignments, shift structures, product priorities, and shared resources such as material handling equipment. Demand arrivals were modeled stochastically to reflect real-world variability rather than average assumptions. The simulation allowed the system to naturally exhibit congestion, queues, and idle time, revealing hidden inefficiencies.

Multiple scenarios were tested by varying labor allocation strategies, station assignments, and demand mixes. Each scenario was evaluated using key performance indicators such as throughput, utilization, waiting times, and work-in-progress levels. Statistical replications ensured that results were robust and not driven by random variation.

The analysis identified a small number of critical bottlenecks that constrained overall throughput, while several upstream resources were significantly underutilized. By reallocating labor and removing unnecessary machine dependencies, the plant was able to maintain output with fewer operators. The simulation also validated the plant's ability to absorb future demand growth without immediate capital investment, provided targeted improvements were implemented. The engagement transformed subjective operational debates into evidence-backed decisions, enabling management to pursue improvements with confidence.`,
    image: 'assets/img/ourwork/case-2.jpg'
  },
  'revenue-media': {
    title: 'Revenue & Media Optimization',
    subtitle: 'Marketing spend optimization across channels',
    category: 'Retail',
    overview: 'A retail company needed to optimize marketing spend across multiple channels to maximize ROI.',
    delivery: 'Created a revenue optimization model that allocates marketing budget based on historical performance data.',
    impact: 'Improved ROI by 40% and increased revenue by 20% within six months.',
    longform: `The project focused on improving revenue outcomes in a highly competitive consumer market where frequent discounting and substantial media spending were used to drive sales. Historically, pricing and promotion decisions were based on past trends and managerial intuition, often resulting in excessive discounting that increased volumes but eroded margins. Marketing budgets were similarly allocated without a clear understanding of marginal returns across channels.

We began by analyzing historical sales, pricing, promotion, and media data to quantify how demand responded to price changes. Demand elasticity models were developed to estimate sales uplift at different discount levels and identify points of diminishing returns. This enabled the business to distinguish between discounts that genuinely drove incremental revenue and those that primarily reduced margins.

In parallel, we evaluated the effectiveness of different media channels by estimating response curves that captured saturation effects. An optimization framework was built to allocate the total marketing budget across channels in a way that maximized revenue impact under budget constraints. Competitor price movements were incorporated to assess cross-price effects and guide defensive pricing strategies.

The integrated framework allowed pricing and media decisions to be evaluated together rather than in isolation. Management could simulate scenarios such as achieving a target sales volume, responding to competitor discounts, or reallocating media spend without increasing budget. The result was a structured, repeatable decision process that reduced over-discounting, improved promotional efficiency, and increased confidence in revenue planning. The project replaced intuition-led decisions with a transparent, data-backed approach to growth.`,
    image: 'assets/img/ourwork/case-3.jpg'
  },
  'last-mile-optimization': {
    title: 'Delivery Time & Fleet Optimization',
    subtitle: 'Last-mile delivery optimization system',
    category: 'Logistics',
    overview: 'A delivery service company struggled with high fuel costs and inconsistent delivery times.',
    delivery: 'Implemented a last-mile optimization system using advanced routing algorithms and fleet management tools.',
    impact: 'Reduced fuel consumption by 20% and improved on-time delivery rates to 95%.',
    longform: `This engagement addressed the challenge of meeting strict delivery time commitments in a hyperlocal delivery network while controlling delivery partner costs. The client promised 30-minute delivery to customers but struggled to balance service levels with staffing expenses. Overstaffing led to high idle time and costs, while understaffing resulted in missed delivery commitments and customer dissatisfaction.

We modeled order arrivals using time-dependent demand patterns to reflect peak and off-peak variability. Delivery partners were represented as capacity-constrained resources, with service times capturing pickup, travel, and drop-off components. Queueing effects and congestion were explicitly modeled to reflect real-world delays that occur during demand surges.

A series of simulation-driven scenarios were evaluated by varying the number of active delivery partners under fixed budget constraints. For each scenario, performance metrics such as average delivery time, tail delays, SLA compliance percentage, and partner utilization were measured. This enabled identification of non-linear thresholds where small changes in staffing had large impacts on delivery performance.

Rather than aiming for unrealistic 100 percent on-time delivery, the model helped management select an economically optimal service level. The final outcome was a clear staffing strategy that balanced cost and customer experience, supported by quantitative evidence. The framework also allowed leadership to plan for special events, demand growth, and budget changes, turning reactive fleet management into a proactive, data-driven process.`,
    image: 'assets/img/ourwork/case-4.jpg'
  },
  'meio-inventory': {
    title: 'End-to-End Inventory Optimization Across Supply Network',
    subtitle: 'Multi-echelon inventory optimization',
    category: 'Supply Chain',
    overview: 'A multi-location supply chain faced excess inventory at some locations and stockouts at others.',
    delivery: 'Developed a network-wide inventory optimization model using MEIO (Multi-Echelon Inventory Optimization) principles.',
    impact: 'Reduced total inventory holding costs by 25% while improving service levels to 98%.',
    longform: `The client, a textile manufacturing company, faced persistent stockouts and lost sales despite holding significant inventory across its supply network. Inventory decisions were made independently at different nodes, leading to poor coordination between manufacturing, warehouses, distribution centers, and customer-facing locations.

We developed a multi-echelon inventory optimization framework that integrated demand forecasts with replenishment decisions across all levels of the network. SKU-level demand variability and lead times were modeled explicitly, allowing safety stock and reorder policies to be optimized holistically rather than locally. The model evaluated trade-offs between service levels, holding costs, and replenishment frequency.

Inventory targets were computed for each SKU at each node, ensuring that buffers were positioned where they added the most value. Scenario analysis was used to test performance under demand spikes, forecast errors, and supply disruptions.

By implementing the optimized inventory policies, the client achieved a significant improvement in service levels across the network, reaching up to 95 percent availability at each node. Stockouts, previously considered unavoidable, were reduced substantially. The solution also improved visibility and coordination across teams, enabling proactive inventory management rather than reactive expediting. The project demonstrated how structured inventory optimization can unlock both service improvement and cost control without increasing overall inventory.`,
    image: 'assets/img/ourwork/case-5.jpg'
  },
  'pharma-lean': {
    title: 'Lean-Driven Productivity Improvement in Pharmaceutical Manufacturing',
    subtitle: 'Lean manufacturing implementation',
    category: 'Pharmaceutical',
    overview: 'A pharmaceutical manufacturer experienced inefficiencies and high operational costs in production.',
    delivery: 'Applied Lean principles and process optimization techniques to streamline manufacturing operations.',
    impact: 'Achieved 35% improvement in productivity and reduced waste by 30%.',
    longform: `This project focused on improving productivity in a pharmaceutical manufacturing environment operating under strict quality and compliance constraints. While output levels were stable, management sought to improve throughput and reduce inefficiencies without compromising regulatory standards or adding resources.

We conducted detailed process mapping and time studies across critical production and support activities. Data was collected on setup times, changeovers, operator movement, and waiting periods. Lean principles were applied to identify non-value-added activities and sources of variability.

Improvement scenarios were designed and evaluated to assess their impact before implementation. Particular attention was given to setup and changeover processes, where small inefficiencies had outsized effects on overall throughput. By redesigning workflows and standardizing procedures, setup times were significantly reduced.

The resulting improvements increased effective capacity and operational predictability while remaining fully compliant with pharmaceutical quality requirements. The engagement provided management with clear, implementable recommendations backed by quantitative analysis, enabling sustainable productivity gains in a highly regulated environment.`,
    image: 'assets/img/ourwork/case-6.jpg'
  },
  'retail-warehouse': {
    title: 'Warehouse & Operations Optimization for Retail Supply Chains',
    subtitle: 'Distribution center optimization',
    category: 'Retail',
    overview: 'A retail chain faced slow order fulfillment and high labor costs in their distribution centers.',
    delivery: 'Optimized warehouse layout, picking strategies, and labor scheduling using simulation and optimization models.',
    impact: 'Reduced order fulfillment time by 40% and cut labor costs by 18%.',
    longform: `The client operated large retail warehouses handling high SKU volumes and seasonal demand variability. Despite significant infrastructure investment, order fulfillment performance suffered during peak periods, leading to delayed dispatches and increased labor costs.

We analyzed warehouse workflows end to end, covering receiving, storage, picking, packing, and dispatch. Operational data was used to identify congestion points, inefficient layouts, and labor imbalances across activities. Demand variability and order profiles were incorporated to reflect real operating conditions.

Alternative operational strategies were evaluated, including changes to picking logic, storage assignment, and labor deployment. Scenarios were tested under peak demand conditions to assess robustness rather than average performance.

The optimized operating model reduced processing delays and improved labor utilization, particularly during seasonal spikes. The warehouse achieved faster order turnaround times without increasing headcount, and management gained a clear understanding of how performance scaled with demand. The project enabled a shift from reactive firefighting to structured, scalable warehouse operations.`,
    image: 'assets/img/ourwork/case-7.jpg'
  },
  'capacity-transparency': {
    title: 'Production Capacity & Cycle Time Transparency Using Simulation',
    subtitle: 'Real-time capacity visibility system',
    category: 'Manufacturing',
    overview: 'A manufacturing facility lacked visibility into actual production capacity and cycle times.',
    delivery: 'Built a simulation model to provide real-time transparency into production capacity and cycle times.',
    impact: 'Improved capacity planning accuracy by 45% and reduced cycle time variability by 30%.',
    longform: `The client lacked clear visibility into its true production capacity and daily output potential, despite operating with a stable workforce. Daily production targets were set arbitrarily, leading to inconsistent performance and missed delivery commitments.

We conducted detailed time studies across all major processes and analyzed over 200 operational records. A discrete event simulation model was built in AnyLogic to replicate the full production line, capturing process variability, setup times, and resource constraints. Monte Carlo simulation was used to estimate cycle times and throughput with 95 percent confidence intervals.

The model identified key bottlenecks and quantified how setup times constrained overall output. Improvement strategies were tested virtually, including setup reduction and sequencing changes. By implementing selected improvements, mold setup time was reduced by 20 percent, significantly improving throughput stability.

The engagement provided management with realistic capacity benchmarks and confidence-backed production targets. Instead of guessing daily output, planners could now rely on data-driven estimates, improving delivery reliability and operational control.`,
    image: 'assets/img/ourwork/case-8.jpg'
  }
};

// Initialize portfolio functionality
document.addEventListener('DOMContentLoaded', function() {
  const casePreview = document.getElementById('casePreview');
  const closeBtn = document.querySelector('.case-preview-close');
  const showMoreBtn = document.querySelector('[data-show-more]');
  
  // Handle case card clicks
  document.querySelectorAll('.case-card-trigger').forEach(button => {
    button.addEventListener('click', function() {
      const caseId = this.getAttribute('data-case-id');
      openCasePreview(caseId);
    });
  });
  
  // Handle close button
  if (closeBtn) {
    closeBtn.addEventListener('click', closeCasePreview);
  }
  
  // Handle clicking outside
  if (casePreview) {
    casePreview.addEventListener('click', function(e) {
      if (e.target === casePreview) {
        closeCasePreview();
      }
    });
  }
  
  // Handle show more button
  if (showMoreBtn) {
    showMoreBtn.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      const moreBody = document.querySelector('.case-preview-more-body');
      
      if (isExpanded) {
        this.setAttribute('aria-expanded', 'false');
        this.querySelector('span').textContent = 'Show more';
        this.querySelector('i').classList.remove('bi-caret-up');
        this.querySelector('i').classList.add('bi-caret-down');
        moreBody.style.maxHeight = '0';
      } else {
        this.setAttribute('aria-expanded', 'true');
        this.querySelector('span').textContent = 'Show less';
        this.querySelector('i').classList.remove('bi-caret-down');
        this.querySelector('i').classList.add('bi-caret-up');
        moreBody.style.maxHeight = moreBody.scrollHeight + 'px';
      }
    });
  }
  
  // Handle ESC key to close
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && casePreview && casePreview.classList.contains('active')) {
      closeCasePreview();
    }
  });
});

function openCasePreview(caseId) {
  const caseData = caseStudies[caseId];
  if (!caseData) {
    console.error('Case study not found:', caseId);
    return;
  }
  
  const casePreview = document.getElementById('casePreview');
  
  // Populate data
  const titleEl = document.querySelector('[data-case-title]');
  const subtitleEl = document.querySelector('[data-case-subtitle]');
  const categoryEl = document.querySelector('[data-case-category]');
  const overviewEl = document.querySelector('[data-case-overview]');
  const deliveryEl = document.querySelector('[data-case-delivery]');
  const impactEl = document.querySelector('[data-case-impact]');
  const longformEl = document.querySelector('[data-longform]');
  const imageEl = document.querySelector('[data-case-image]');
  
  if (titleEl) titleEl.textContent = caseData.title;
  if (subtitleEl) subtitleEl.textContent = caseData.subtitle || '';
  if (categoryEl) categoryEl.textContent = caseData.category || '';
  if (overviewEl) overviewEl.textContent = caseData.overview;
  if (deliveryEl) deliveryEl.textContent = caseData.delivery;
  if (impactEl) impactEl.textContent = caseData.impact;
  if (longformEl) longformEl.textContent = caseData.longform;
  if (imageEl && caseData.image) {
    imageEl.src = caseData.image;
    imageEl.alt = caseData.title;
  }
  
  // Reset show more button
  const showMoreBtn = document.querySelector('[data-show-more]');
  const moreBody = document.querySelector('.case-preview-more-body');
  if (showMoreBtn && moreBody) {
    showMoreBtn.setAttribute('aria-expanded', 'false');
    const spanEl = showMoreBtn.querySelector('span');
    const iconEl = showMoreBtn.querySelector('i');
    if (spanEl) spanEl.textContent = 'Show more';
    if (iconEl) {
      iconEl.classList.remove('bi-caret-up');
      iconEl.classList.add('bi-caret-down');
    }
    moreBody.style.maxHeight = '0';
  }
  
  // Show preview
  casePreview.classList.add('active');
  casePreview.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  
  // Focus on close button for accessibility
  setTimeout(() => {
    const closeBtn = document.querySelector('.case-preview-close');
    if (closeBtn) closeBtn.focus();
  }, 100);
}

function closeCasePreview() {
  const casePreview = document.getElementById('casePreview');
  casePreview.classList.remove('active');
  casePreview.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
